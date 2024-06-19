import { ITableOptions } from "docx";
import { XmlValue } from "../../types";
import { ConvertedTableRow, XmlTableRow } from "../tableRow";
import { stringify } from "../../utils";

export interface XmlTableProperties {
  style: XmlValue;
  tableWidth: {
    width: number;
    type: ITableOptions["width"]["type"];
  };
}

export interface XmlTableGrid {
  gridCol: { width: number }[];
}

export interface XmlTable {
  properties: XmlTableProperties;
  tableGrid: XmlTableGrid;
  tableRow: XmlTableRow[];
}

type ConvertedTableProperties = Omit<ITableOptions, "rows">;

const convertTableProperties = (
  content: XmlTable
): ConvertedTableProperties => {
  return {
    style: content.properties.style.value,
    width: {
      size: content.properties.tableWidth.width,
      type: content.properties.tableWidth.type,
    },
    columnWidths: content.tableGrid.gridCol.map((col) => col.width),
  };
};

export class ConvertedTable {
  rows: ConvertedTableRow[] = [];
  properties: ConvertedTableProperties;

  constructor(table: XmlTable) {
    this.rows = table.tableRow.map((row) => new ConvertedTableRow(row));
    this.properties = convertTableProperties(table);
  }

  toString() {
    const rowsString = this.rows.map((child) => child.toString()).join(", ");
    return `new Table({ ${stringify(this.properties, true)}, rows: [${rowsString}] })`;
  }
}
