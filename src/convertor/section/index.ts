import { ISectionPropertiesOptions } from "docx";
import { ConvertedFooter, XmlFooter } from "../footer";
import { ConvertedHeader, XmlHeader } from "../header";
import { ConvertedParagraph, XmlParagraph } from "../paragraph";
import { stringify } from "../../utils";
import { ConvertedTable, XmlTable } from "../table";

interface XmlSectionProperties {
  size: {
    width: number;
    height: number;
  };
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
    header: number;
    footer: number;
    gutter: number;
  };
  column: {
    space: number;
  };
  grid: {
    linePitch: number;
  };
}

const convertSectionProperties = (
  content: XmlSectionProperties
): ISectionPropertiesOptions => {
  return {
    page: {
      size: {
        width: content.size.width,
        height: content.size.height,
      },
      margin: {
        top: content.margin.top,
        right: content.margin.right,
        bottom: content.margin.bottom,
        left: content.margin.left,
        header: content.margin.header,
        footer: content.margin.footer,
        gutter: content.margin.gutter,
      },
    },
    column: {
      space: content.column.space,
    },
    grid: {
      linePitch: content.grid.linePitch,
    },
  };
};

export interface XmlSection {
  content: Array<XmlParagraph & XmlTable>
  properties: XmlSectionProperties;
}

export class ConvertedSection {
  children: Array<ConvertedParagraph | ConvertedTable> = [];
  header: ConvertedHeader;
  footer: ConvertedFooter;
  properties: ISectionPropertiesOptions;

  constructor(
    sectionXml: XmlSection,
    headerXml?: XmlHeader,
    footerXml?: XmlFooter
  ) {
    this.children = sectionXml.content.map((child) => {
      if (child["tableRow"]) return new ConvertedTable(child);
      return new ConvertedParagraph(child);
    });
    this.footer = new ConvertedFooter(footerXml);
    this.header = new ConvertedHeader(headerXml);
    this.properties = convertSectionProperties(sectionXml.properties);
  }

  toString() {
    return `{ properties: ${stringify(this.properties)}, headers: { default: ${this.header.toString()} }, footers: { default: ${this.footer.toString()} }, children: [${this.children.map((child) => child.toString())}] }`;
  }
}
