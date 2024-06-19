import { IRunOptions, IRunStylePropertiesOptions } from "docx";
import { convertTextRunStyle, XmlTextRunStyle } from "./styles";
import { isEmptyObject, isEqual, stringify } from "../../utils";
import { ConvertedTab } from "../tab";

export interface XmlTextRun {
  text: string | { _: string };
  textRunStyle: XmlTextRunStyle;
  tab?: string;
  instrText?: string;
  fldChar?: {
    fldCharType: "begin" | "separate" | "end";
  }
}

export const concatTextRun = (textRuns: ConvertedTextRun[]) => {
  return textRuns.reduce((acc, cur) => {
    const lastIndex = acc.length - 1;
    const last = acc[lastIndex];
    if (last && last.text && cur.text) {
      if (!cur.styles && !last.styles) {
        last.text = last.text + cur.text;
        return acc;
      } else if (cur.styles && last.styles) {
        if (isEqual(cur.styles, last.styles)) {
          last.text = last.text + cur.text;
          return acc;
        }
      }
    }
    return [...acc, cur];
  }, [] as ConvertedTextRun[]);
};

const getRunTextText = (textRun: XmlTextRun) =>
  (typeof textRun.text === "string" ? textRun.text : textRun.text?._) || " ";

const getPageNumber = (instrText: string) => {
  if (instrText.includes("NUMPAGES")) return "PageNumber.TOTAL_PAGES";
  if (instrText.includes("PAGE")) return "PageNumber.CURRENT";
};

export class ConvertedTextRun {
  tab: ConvertedTab;
  pageNumber: string;
  text: string;
  styles: IRunStylePropertiesOptions = {};

  constructor(textRun: XmlTextRun) {
    const text = getRunTextText(textRun);
    if (textRun.tab === "") {
      this.tab = new ConvertedTab();
    } else if (textRun.instrText) {
      this.pageNumber = getPageNumber(textRun.instrText);
    } else if (text) {
      this.text = text;
    }
    this.styles = convertTextRunStyle(textRun.textRunStyle) || {};
  }

  getOptions(): IRunOptions | string {
    if (this.text) return { text: this.text, ...this.styles };
    return this.styles;
  }

  hasStyles() {
    return !isEmptyObject(this.styles);
  }

  toString() {
    if (this.tab) {
      return `new TextRun({ children: [${this.tab.toString()}], ${stringify(this.getOptions(), true)} })`;
    }
    if (this.pageNumber) {
      return `new TextRun({ children: [${this.pageNumber}], ${stringify(this.getOptions(), true)} })`;
    }
    if (this.hasStyles()) {
      return `new TextRun(${stringify(this.getOptions())})`;
    }
    return `new TextRun("${this.text}")`;
  }
}
