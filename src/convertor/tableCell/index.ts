import { IShadingAttributesProperties, ITableCellOptions } from "docx";
import { XmlValue } from "../../types";
import { ConvertedParagraph, XmlParagraph } from "../paragraph";
import { stringify } from "../../utils";

interface XmlTableCellProperties {
  tableCellWidth: {
    width: number;
    type: ITableCellOptions["width"]["type"];
  };
  verticalAlignment: XmlValue<ITableCellOptions["verticalAlign"]>;
  shading: {
    value: IShadingAttributesProperties["type"];
    color: string;
    fill: string;
  };
}

type ConvertedTableCellProperties = Omit<ITableCellOptions, "children">;

const convertTableCellProperties = (
  content: XmlTableCellProperties
): ConvertedTableCellProperties => {
  return {
    verticalAlign: content.verticalAlignment?.value,
    shading: content.shading
      ? {
          color: content.shading.color,
          fill: `#${content.shading.fill}`,
          type: content.shading.value,
        }
      : undefined,
    width: {
      size: content.tableCellWidth.width,
      type: content.tableCellWidth.type,
    },
  };
};

export interface XmlTableCell {
  properties: XmlTableCellProperties;
  children: XmlParagraph | XmlParagraph[];
}

export class ConvertedTableCell {
  children: ConvertedParagraph[] = [];
  properties: ConvertedTableCellProperties;

  constructor(table: XmlTableCell) {
    const children = Array.isArray(table.children)
      ? table.children
      : [table.children];

    this.children = children
      .filter(Boolean)
      .map((child) => new ConvertedParagraph(child));
    this.properties = convertTableCellProperties(table.properties);
  }

  toString() {
    const childrenString = this.children
      .map((child) => child.toString())
      .join(", ");
    return `new TableCell({ ${stringify(this.properties, true)}, children: [${childrenString}] })`;
  }
}
