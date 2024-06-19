import { IParagraphStyleOptions, IStylesOptions } from "docx";
import { XmlValue } from "../../types";
import {
  XmlParagraphStyle,
  convertParagraphStyle,
  heading,
} from "../paragraph/styles";
import { XmlTextRunStyle, convertTextRunStyle } from "../textRun/styles";
import { IDefaultStylesOptions } from "docx/build/file/styles/factory";

export interface XmlDocumentStyle {
  default: XmlStyle;
  styles: XmlStyle[];
}

export interface XmlStyle {
  type: "paragraph" | "character";
  styleId: string;
  name?: XmlValue;
  basedOn?: XmlValue;
  next?: XmlValue;
  textRunStyle: XmlTextRunStyle;
  paragraphStyle: XmlParagraphStyle;
}

const convertStyles = (
  content: XmlStyle,
  withId?: boolean
): IParagraphStyleOptions => {
  return {
    id: withId ? content.styleId : undefined,
    name: content.name?.value,
    basedOn: content.basedOn?.value,
    next: content.next?.value,
    run: convertTextRunStyle(content.textRunStyle),
    paragraph: convertParagraphStyle(content.paragraphStyle),
  };
};

const convertDefaultStyles = (
  content: XmlDocumentStyle
): IDefaultStylesOptions => {
  const documentRunStyles = convertTextRunStyle(content.default.textRunStyle);
  const documentParagraphStyles = convertParagraphStyle(
    content.default.paragraphStyle
  );
  const headingStyles = Object.keys(heading).reduce((acc, key) => {
    const keyValue = heading[key];
    const stylesValue = content.styles.find((style) => style.styleId === key);
    if (!stylesValue) return acc;
    const styles = convertStyles(stylesValue);
    return { ...acc, [keyValue]: styles };
  }, {});

  return {
    document: { run: documentRunStyles, paragraph: documentParagraphStyles },
    ...headingStyles,
  };
};

export const convertAllStyles = (
  stylesXml: XmlDocumentStyle
): IStylesOptions => {
  const defaultStyles = convertDefaultStyles(stylesXml);
  const styles = stylesXml.styles
    .filter(
      (style) =>
        style.type === "paragraph" &&
        !Object.keys(heading).includes(style.styleId)
    )
    .map((style) => convertStyles(style, true));

  return { default: defaultStyles, paragraphStyles: styles };
};
