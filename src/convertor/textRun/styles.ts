import { IRunStylePropertiesOptions, UnderlineType } from "docx";
import { XmlValue } from "../../types";
import { isEmptyObject, removeUndefined } from "../../utils";

export interface XmlTextRunStyle {
  aligment?: XmlValue;
  color?: XmlValue;
  underline?: XmlValue<any>;
  bold?: XmlValue | string;
  italics?: XmlValue | string;
  size?: XmlValue<number>;
  highlight: XmlValue;
  font?: {
    ascii: string;
    hAnsi: string;
    cs: string;
  };
}

export const convertTextRunStyle = (
  style?: XmlTextRunStyle
): IRunStylePropertiesOptions | undefined => {
  let styles: IRunStylePropertiesOptions = {};
  if (!style) return undefined;

  const color = style.color?.value;
  const underline = style.underline?.value;
  const highlight = style.highlight?.value;
  const bold = style.bold;
  const italics = style.italics;
  const size = style.size?.value;
  const font = style.font?.ascii;

  if (color && color !== "000000") styles = { ...styles, color: `#${color}` };
  if (underline) styles = { ...styles, underline: { type: underline } };
  if (typeof bold === "string") styles = { ...styles, bold: true };
  if (typeof italics === "string") styles = { ...styles, italics: true };

  styles = { ...styles, highlight, font, size };

  if (isEmptyObject(styles)) return undefined;
  return removeUndefined(styles);
};
