import { INumberingOptions, IStylesOptions } from "docx";
import { ConvertedSection, XmlSection } from "../section";
import { stringify } from "../../utils";
import { XmlDocumentStyle, convertAllStyles } from "./styles";
import { XmlDocumentNumbering, convertAllNumbering } from "./numbering";
import { XmlFooter } from "../footer";
import { XmlHeader } from "../header";

export class ConvertedDocument {
  section: ConvertedSection;
  styles: IStylesOptions;
  numbering: INumberingOptions;

  constructor(
    headerXml?: XmlHeader,
    footerXml?: XmlFooter,
    sectionXml?: XmlSection,
    stylesXml?: XmlDocumentStyle,
    numberingXml?: XmlDocumentNumbering
  ) {
    this.section = new ConvertedSection(sectionXml, headerXml, footerXml);
    this.styles = convertAllStyles(stylesXml);
    this.numbering = convertAllNumbering(numberingXml);
  }

  toString() {
    return `new Document({ ${stringify({ numbering: this.numbering, styles: this.styles }, true)}, sections: [${this.section.toString()}] })`;
  }
}
