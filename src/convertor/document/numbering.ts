import { ILevelsOptions, INumberingOptions } from "docx";
import { XmlValue } from "../../types";
import { XmlParagraphStyle, convertParagraphStyle } from "../paragraph/styles";
import { XmlTextRunStyle, convertTextRunStyle } from "../textRun/styles";

export interface XmlNumberingLevel {
  ilvl: number;
  start?: XmlValue<number>;
  format: XmlValue<ILevelsOptions["format"]>;
  text: XmlValue;
  alignment: XmlValue<ILevelsOptions["alignment"]>;
  paragraphStyle: XmlParagraphStyle;
  textRunStyle: XmlTextRunStyle;
}

export interface XmlAbstractNumbering {
  abstractNumId: number;
  lvl: XmlNumberingLevel[];
}

export interface XmlNumbering {
  numId: number;
  abstractNumId: XmlValue<number>;
}

export interface XmlDocumentNumbering {
  abstractNum: XmlAbstractNumbering[];
  num: XmlNumbering[];
}

export const convertNumberingLevel = (
  content: XmlNumberingLevel
): ILevelsOptions => {
  return {
    level: content.ilvl,
    start: content.start?.value,
    format: content.format.value,
    text: content.text.value,
    alignment: content.alignment.value,
    style: {
      paragraph: convertParagraphStyle(content.paragraphStyle),
      run: convertTextRunStyle(content.textRunStyle),
    },
  };
};

export const convertNumbering = (
  numbering: XmlNumbering,
  abstractNum: XmlAbstractNumbering[]
): INumberingOptions["config"][0] => {
  const abstractNumbering = abstractNum.find(
    (abstract) => abstract.abstractNumId === numbering.abstractNumId.value
  );
  return {
    reference: `${numbering.numId}`,
    levels:
      abstractNumbering?.lvl?.map((level) => convertNumberingLevel(level)) ||
      [],
  };
};

export const convertAllNumbering = (
  content?: XmlDocumentNumbering
): INumberingOptions => {
  if (!content) return { config: [] };
  return {
    config: content.num
      .map((num) => convertNumbering(num, content.abstractNum))
      .filter(Boolean),
  };
};
