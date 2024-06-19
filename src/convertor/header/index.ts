import { ConvertedParagraph, XmlParagraph } from "../paragraph";

export interface XmlHeader {
  content: XmlParagraph[];
}

export class ConvertedHeader {
  children: ConvertedParagraph[];

  constructor(headerXml: XmlHeader) {
    this.children = headerXml.content.map((p) => new ConvertedParagraph(p));
  }

  toString() {
    return `new Header({ children: [${this.children.map((child) => child.toString())}] })`;
  }
}
