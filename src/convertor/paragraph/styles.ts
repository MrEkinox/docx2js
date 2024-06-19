import {
  IBorderOptions,
  IBordersOptions,
  IIndentAttributesProperties,
  IParagraphOptions,
  IParagraphPropertiesOptions,
  ISpacingProperties,
} from "docx";
import { XmlValue } from "../../types";
import { isEmptyObject, removeUndefined } from "../../utils";

export interface XmlBorderStyleValue {
  value: IBorderOptions["style"];
  size: number;
  space: number;
  color: string;
}

export interface XmlBorderStyle {
  top?: XmlBorderStyleValue;
  bottom?: XmlBorderStyleValue;
  left?: XmlBorderStyleValue;
  right?: XmlBorderStyleValue;
}

export interface XmlSpacingStyle {
  before: number;
  after: number;
  line: number;
  lineRule: ISpacingProperties["lineRule"];
}

export interface XmlNumberingStyle {
  level: XmlValue<number>;
  numId: XmlValue<number>;
}

export interface XmlIndentStyle {
  left: number;
  hanging: number;
}

export interface XmlParagraphStyle {
  alignment?: XmlValue;
  heading?: XmlValue;
  numPr?: XmlNumberingStyle;
  spacing?: XmlSpacingStyle;
  border?: XmlBorderStyle;
  indent?: XmlIndentStyle;
}

const convertIndentStyle = (
  style?: XmlIndentStyle
): IIndentAttributesProperties | undefined => {
  if (!style) return undefined;
  return {
    left: style.left,
    hanging: style.hanging,
  };
};

const convertAlignmentStyle = (style?: XmlValue) => {
  const value = style?.value;
  if (!value) return undefined;
  return value as IParagraphOptions["alignment"];
};

export const heading: Record<string, string> = {
  Heading1: "heading1",
  Heading2: "heading2",
  Heading3: "heading3",
  Heading4: "heading4",
  Heading5: "heading5",
  Heading6: "heading6",
  Title: "title",
};

const convertHeadingStyle = (
  headingStyle?: XmlValue
): IParagraphOptions | undefined => {
  const value = headingStyle?.value;
  if (!value) return undefined;
  if (Object.keys(heading).includes(value))
    return { heading: value as IParagraphOptions["heading"] };
  return { style: value };
};

const convertBorderStyleValue = (
  style?: XmlBorderStyleValue
): IBorderOptions | undefined => {
  if (!style) return undefined;
  return {
    style: style.value,
    color: style.color,
    size: style.size,
    space: style.space,
  };
};

const convertBorderStyle = (
  style?: XmlBorderStyle
): IBordersOptions | undefined => {
  if (!style) return undefined;
  return {
    top: convertBorderStyleValue(style.top),
    bottom: convertBorderStyleValue(style.bottom),
    left: convertBorderStyleValue(style.left),
    right: convertBorderStyleValue(style.right),
  };
};

const convertSpacingStyle = (
  style?: XmlSpacingStyle
): ISpacingProperties | undefined => {
  if (!style) return undefined;
  const before = style.before;
  const after = style.after;
  const line = style.line;
  const lineRule = style.lineRule;
  const spacing = { before, after, line, lineRule };

  if (isEmptyObject(spacing)) return undefined;
  return removeUndefined(spacing);
};

const convertNumberingStyle = (
  style?: XmlNumberingStyle
): IParagraphPropertiesOptions["numbering"] | undefined => {
  if (!style) return undefined;
  const level = style.level.value;
  return { level, reference: `${style.numId.value}` };
};

export const convertParagraphStyle = (
  style?: XmlParagraphStyle
): IParagraphOptions | undefined => {
  if (!style) return undefined;
  const alignment = convertAlignmentStyle(style.alignment);
  const spacing = convertSpacingStyle(style.spacing);
  const numbering = convertNumberingStyle(style.numPr);
  const border = convertBorderStyle(style.border);
  const indent = convertIndentStyle(style.indent);
  const headingStyles = convertHeadingStyle(style.heading);

  const styles = {
    ...headingStyles,
    border,
    spacing,
    alignment,
    numbering,
    indent,
  };

  if (isEmptyObject(styles)) return undefined;
  return removeUndefined(styles);
};
