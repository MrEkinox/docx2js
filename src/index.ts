import JSZip from "jszip";
import camaro from "camaro";
import xml2js from "xml2js";
import { parseNumbers, parseBooleans } from "xml2js/lib/processors";
import fs from "fs";
import * as prettier from "@prettier/sync";
import { ConvertedDocument } from "./convertor/document";

const loadFile = async (filePath: string) => {
  const data = fs.readFileSync(filePath);
  return JSZip.loadAsync(data);
};

const attrNameReplacement = {
  val: "value",
  sz: "size",
  w: "width",
  h: "height",
};

const tagNameReplacement = {
  trPr: 'properties',
  tcPr: 'properties',
  shd: "shading",
  vAlign: "verticalAlignment",
  tcW: 'tableCellWidth',
  tr: 'tableRow',
  tc: 'tableCell',
  tblGrid: 'tableGrid',
  tblPr: "properties",
  tblStyle: 'style',
  tblW: 'tableWidth',
  pgMar: "margin",
  pgSz: "size",
  sectPr: "properties",
  cols: "column",
  docGrid: "grid",
  ind: "indent",
  lvlText: "text",
  lvlJc: "alignment",
  numFmt: "format",
  p: "children",
  r: "children",
  ilvl: "level",
  i: "italics",
  u: "underline",
  t: "text",
  b: "bold",
  sz: "size",
  pBdr: "border",
  jc: "alignment",
  rPr: "textRunStyle",
  pPr: "paragraphStyle",
  rFonts: "font",
  pStyle: "heading",
};

export const parseXML = async (content: string) => {
  const parser = new xml2js.Parser({
    explicitArray: false,
    explicitRoot: false,
    mergeAttrs: true,
    attrNameProcessors: [
      (name) => name.replace("w:", ""),
      (name) => {
        const attrNameReplacementKeys = Object.keys(attrNameReplacement);
        if (attrNameReplacementKeys.includes(name)) {
          return attrNameReplacement[name];
        }
        return name;
      },
    ],
    attrValueProcessors: [parseNumbers, parseBooleans],
    tagNameProcessors: [
      (name) => name.replace("w:", ""),
      (name) => {
        const tagNameReplacementKeys = Object.keys(tagNameReplacement);
        if (tagNameReplacementKeys.includes(name)) {
          return tagNameReplacement[name];
        }
        return name;
      },
    ],
  });
  return parser.parseStringPromise(content);
};

export const parseObjectXML = async (
  content: object | Array<object | string> | string
) => {
  if (typeof content === "string") {
    return parseXML(content);
  }
  if (Array.isArray(content)) {
    return Promise.all(content.map(parseObjectXML));
  }
  if (typeof content === "object") {
    return Object.keys(content).reduce(async (acc, cur) => {
      const value = content[cur];
      return { ...(await acc), [cur]: await parseObjectXML(value) };
    }, {});
  }
};

type BinaryXmlType = "header" | "footer" | "section" | "styles" | "numbering";

const XmlTypeSector: Record<BinaryXmlType, any> = {
  section: {
    content: ["/w:document/w:body/*", "raw()"],
    properties: "raw(/w:document/w:body/w:sectPr)",
  },
  header: { content: ["/w:hdr/*", "raw()"] },
  footer: { content: ["/w:ftr/*", "raw()"] },
  numbering: {
    abstractNum: ["/w:numbering/w:abstractNum", "raw()"],
    num: ["/w:numbering/w:num", "raw()"],
  },
  styles: {
    default: {
      textRunStyle: "raw(/w:styles/w:docDefaults/w:rPrDefault/*)",
      paragraphStyle: "raw(/w:styles/w:docDefaults/w:pPrDefault/*)",
    },
    styles: ["/w:styles/w:style", "raw()"],
  },
};

export const readBinaryXML = async (
  type: BinaryXmlType,
  binary?: JSZip.JSZipObject
) => {
  if (!binary) return {};
  const content = await binary.async("string");
  await fs.writeFileSync(
    `${__dirname}/debug/xml/${type}.xml`,
    JSON.stringify(content, null, 2)
  );
  const xmlnode = await camaro.transform(content, XmlTypeSector[type]);
  return parseObjectXML(xmlnode);
};

const createFile = async (document: ConvertedDocument) => {
  const fileContent = `import { Document, Paragraph, TextRun, Header, Footer, Tab, PageNumber, Table, TableRow, TableCell } from 'docx'\n
	export const template = ${document.toString()}`;
  const prettierContent = await prettier.format(fileContent, {
    parser: "babel",
  });
  fs.writeFile(`${__dirname}/test.ts`, prettierContent, () => {});
};

const createDebugFile = async (content: any, fileName: string) => {
  await fs.writeFileSync(
    `${__dirname}/debug/${fileName}.json`,
    JSON.stringify(content, null, 2)
  );
};

export const convertor = async (filePath: string, debug = false) => {
  const data = await loadFile(filePath);
  const sectionKey = Object.keys(data.files).find((key) =>
    /word\/document.*\.xml/.test(key)
  );
  const stylesKey = Object.keys(data.files).find((key) =>
    /word\/styles.*\.xml/.test(key)
  );
  const numberingKey = Object.keys(data.files).find((key) =>
    /word\/numbering.*\.xml/.test(key)
  );
  const headerKey = Object.keys(data.files).find((key) =>
    /word\/header1.*\.xml/.test(key)
  );
  const footerKey = Object.keys(data.files).find((key) =>
    /word\/footer1.*\.xml/.test(key)
  );
  const sectionXml = await readBinaryXML("section", data.files[sectionKey]);
  const stylesXml = await readBinaryXML("styles", data.files[stylesKey]);
  const numberingXml = await readBinaryXML(
    "numbering",
    data.files[numberingKey]
  );
  const footerXml = await readBinaryXML("footer", data.files[footerKey]);
  const headerXml = await readBinaryXML("header", data.files[headerKey]);
  // const testcontent = await readBinary(data.files["word/theme/theme1.xml"]);
  // console.log(testcontent, testcontent["a:themeElements"]["a:fontScheme"]);
  if (debug) {
    await fs.mkdirSync(`${__dirname}/debug`, { recursive: true });
    await createDebugFile(sectionXml, "section");
    await createDebugFile(headerXml, "header");
    await createDebugFile(footerXml, "footer");
    await createDebugFile(stylesXml, "styles");
    await createDebugFile(numberingXml, "numbering");
  }

  const document = new ConvertedDocument(
    headerXml,
    footerXml,
    sectionXml,
    stylesXml,
    numberingXml
  );
  await createFile(document);
};
