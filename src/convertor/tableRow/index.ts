import { ConvertedTableCell, XmlTableCell } from "../tableCell";

export interface XmlTableRow {
  tableCell: XmlTableCell[];
}

export class ConvertedTableRow {
  children: ConvertedTableCell[] = [];

  constructor(table: XmlTableRow) {
    this.children = table.tableCell.map((cell) => new ConvertedTableCell(cell));
  }

  toString() {
    const childrenString = this.children
      .map((child) => child.toString())
      .join(", ");
    return `new TableRow({ children: [${childrenString}] })`;
  }
}
