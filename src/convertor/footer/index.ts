import { ConvertedParagraph, XmlParagraph } from "../paragraph";

export interface XmlFooter {
  content: XmlParagraph[];
}

export class ConvertedFooter {
  children: ConvertedParagraph[];

  constructor(footerXml: XmlFooter) {
    this.children = footerXml.content.map((p) => new ConvertedParagraph(p));
  }

  toString() {
    return `new Footer({ children: [${this.children.map((child) => child.toString())}] })`;
  }
}
