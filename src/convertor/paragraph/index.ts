import { IParagraphOptions } from "docx";
import { ConvertedTextRun, XmlTextRun, concatTextRun } from "../textRun";
import { XmlParagraphStyle, convertParagraphStyle } from "./styles";
import { stringify } from "../../utils";

export interface XmlParagraph {
  children: XmlTextRun | XmlTextRun[];
  paragraphStyle: XmlParagraphStyle;
  hyperlink: XmlTextRun;
}

const isSeparateTextRun = (
  child: XmlTextRun,
  index: number,
  array: XmlTextRun[]
) => {
  if (child.fldChar) return true;
  if (array[index - 1]?.fldChar?.fldCharType === "separate") return true;
  return false;
};

export class ConvertedParagraph {
  children: ConvertedTextRun[] = [];
  styles: IParagraphOptions = {};

  constructor(paragraph: XmlParagraph) {
    this.styles = convertParagraphStyle(paragraph?.paragraphStyle) || {};

    const children = Array.isArray(paragraph.children)
      ? paragraph.children
      : [paragraph.children];

    this.children = concatTextRun(
      children
        .filter(Boolean)
        .map((child, index) => {
          if (isSeparateTextRun(child, index, children)) return undefined;
          return new ConvertedTextRun(child);
        })
        .filter(Boolean)
    );
  }

  toString() {
    if (this.children.length === 1 && !this.children[0].hasStyles()) {
      return `new Paragraph({ text: "${this.children[0].text}", ${stringify(this.styles, true)} })`;
    }

    if (this.children.length === 0) {
      return `new Paragraph(${stringify(this.styles)})`;
    }

    const childrenString = this.children
      .map((child) => child.toString())
      .join(", ");
    return `new Paragraph({ children: [${childrenString}], ${stringify(this.styles, true)} })`;
  }
}
