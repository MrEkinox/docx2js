import {
  Document,
  Paragraph,
  TextRun,
  Header,
  Footer,
  Tab,
  PageNumber,
  Table,
  TableRow,
  TableCell,
} from "docx";

export const template = new Document({
  numbering: {
    config: [
      {
        reference: "1",
        levels: [
          {
            level: 0,
            format: "bullet",
            text: "-",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 720,
                  hanging: 360,
                },
              },
              run: {
                font: "Calibri",
              },
            },
          },
          {
            level: 1,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 1440,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 2,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2160,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 3,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2880,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 4,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 3600,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 5,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 4320,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 6,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5040,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 7,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5760,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 8,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 6480,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
        ],
      },
      {
        reference: "2",
        levels: [
          {
            level: 0,
            start: 6,
            format: "bullet",
            text: "-",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 1494,
                  hanging: 360,
                },
              },
              run: {
                font: "Times New Roman",
              },
            },
          },
          {
            level: 1,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2214,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 2,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2934,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 3,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 3654,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 4,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 4374,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 5,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5094,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 6,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5814,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 7,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 6534,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 8,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 7254,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
        ],
      },
      {
        reference: "3",
        levels: [
          {
            level: 0,
            start: 3,
            format: "bullet",
            text: "-",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 720,
                  hanging: 360,
                },
              },
              run: {
                font: "Calibri",
              },
            },
          },
          {
            level: 1,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 1440,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 2,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2160,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 3,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2880,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 4,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 3600,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 5,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 4320,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 6,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5040,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 7,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5760,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 8,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 6480,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
        ],
      },
      {
        reference: "4",
        levels: [
          {
            level: 0,
            start: 1,
            format: "decimal",
            text: "%1)",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 720,
                  hanging: 360,
                },
              },
            },
          },
          {
            level: 1,
            start: 1,
            format: "lowerLetter",
            text: "%2.",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 1440,
                  hanging: 360,
                },
              },
            },
          },
          {
            level: 2,
            start: 1,
            format: "lowerRoman",
            text: "%3.",
            alignment: "right",
            style: {
              paragraph: {
                indent: {
                  left: 2160,
                  hanging: 180,
                },
              },
            },
          },
          {
            level: 3,
            start: 1,
            format: "decimal",
            text: "%4.",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2880,
                  hanging: 360,
                },
              },
            },
          },
          {
            level: 4,
            start: 1,
            format: "lowerLetter",
            text: "%5.",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 3600,
                  hanging: 360,
                },
              },
            },
          },
          {
            level: 5,
            start: 1,
            format: "lowerRoman",
            text: "%6.",
            alignment: "right",
            style: {
              paragraph: {
                indent: {
                  left: 4320,
                  hanging: 180,
                },
              },
            },
          },
          {
            level: 6,
            start: 1,
            format: "decimal",
            text: "%7.",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5040,
                  hanging: 360,
                },
              },
            },
          },
          {
            level: 7,
            start: 1,
            format: "lowerLetter",
            text: "%8.",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5760,
                  hanging: 360,
                },
              },
            },
          },
          {
            level: 8,
            start: 1,
            format: "lowerRoman",
            text: "%9.",
            alignment: "right",
            style: {
              paragraph: {
                indent: {
                  left: 6480,
                  hanging: 180,
                },
              },
            },
          },
        ],
      },
      {
        reference: "5",
        levels: [
          {
            level: 0,
            format: "bullet",
            text: "-",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 720,
                  hanging: 360,
                },
              },
              run: {
                font: "Arial",
              },
            },
          },
          {
            level: 1,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 1440,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 2,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2160,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 3,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2880,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 4,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 3600,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 5,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 4320,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 6,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5040,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 7,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5760,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 8,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 6480,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
        ],
      },
      {
        reference: "6",
        levels: [
          {
            level: 0,
            format: "bullet",
            text: "-",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 720,
                  hanging: 360,
                },
              },
              run: {
                font: "Arial",
              },
            },
          },
          {
            level: 1,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 1440,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 2,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2160,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 3,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2880,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 4,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 3600,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 5,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 4320,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 6,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5040,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 7,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5760,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 8,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 6480,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
        ],
      },
      {
        reference: "7",
        levels: [
          {
            level: 0,
            format: "bullet",
            text: "-",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 720,
                  hanging: 360,
                },
              },
              run: {
                font: "Calibri",
              },
            },
          },
          {
            level: 1,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 1440,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 2,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2160,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 3,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2880,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 4,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 3600,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 5,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 4320,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 6,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5040,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 7,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5760,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 8,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 6480,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
        ],
      },
      {
        reference: "8",
        levels: [
          {
            level: 0,
            format: "bullet",
            text: "-",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 720,
                  hanging: 360,
                },
              },
              run: {
                font: "Arial",
              },
            },
          },
          {
            level: 1,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 1440,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 2,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2160,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 3,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2880,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 4,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 3600,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 5,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 4320,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 6,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5040,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 7,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5760,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 8,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 6480,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
        ],
      },
      {
        reference: "9",
        levels: [
          {
            level: 0,
            format: "bullet",
            text: "-",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 720,
                  hanging: 360,
                },
              },
              run: {
                font: "Arial",
              },
            },
          },
          {
            level: 1,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 1440,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 2,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2160,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 3,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2880,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 4,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 3600,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 5,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 4320,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 6,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5040,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 7,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5760,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 8,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 6480,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
        ],
      },
      {
        reference: "10",
        levels: [
          {
            level: 0,
            start: 1,
            format: "bullet",
            text: "-",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 720,
                  hanging: 360,
                },
              },
              run: {
                font: "Calibri",
              },
            },
          },
          {
            level: 1,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 1440,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 2,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2160,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 3,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2880,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 4,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 3600,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 5,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 4320,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 6,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5040,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 7,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5760,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 8,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 6480,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
        ],
      },
      {
        reference: "11",
        levels: [
          {
            level: 0,
            start: 2,
            format: "bullet",
            text: "-",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 720,
                  hanging: 360,
                },
              },
              run: {
                font: "Times New Roman",
              },
            },
          },
          {
            level: 1,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 1440,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 2,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2160,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 3,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 2880,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 4,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 3600,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 5,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 4320,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
          {
            level: 6,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5040,
                  hanging: 360,
                },
              },
              run: {
                font: "Symbol",
              },
            },
          },
          {
            level: 7,
            start: 1,
            format: "bullet",
            text: "o",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 5760,
                  hanging: 360,
                },
              },
              run: {
                font: "Courier New",
              },
            },
          },
          {
            level: 8,
            start: 1,
            format: "bullet",
            text: "",
            alignment: "left",
            style: {
              paragraph: {
                indent: {
                  left: 6480,
                  hanging: 360,
                },
              },
              run: {
                font: "Wingdings",
              },
            },
          },
        ],
      },
    ],
  },
  styles: {
    default: {
      document: {
        run: {
          size: 22,
        },
        paragraph: {
          spacing: {
            after: 160,
            line: 259,
            lineRule: "auto",
          },
        },
      },
    },
    paragraphStyles: [
      {
        id: "Normal",
        name: "Normal",
        paragraph: {
          spacing: {
            line: 256,
            lineRule: "auto",
          },
        },
      },
      {
        id: "En-tte",
        name: "header",
        basedOn: "Normal",
        paragraph: {
          spacing: {
            after: 0,
            line: 240,
            lineRule: "auto",
          },
        },
      },
      {
        id: "Pieddepage",
        name: "footer",
        basedOn: "Normal",
        paragraph: {
          spacing: {
            after: 0,
            line: 240,
            lineRule: "auto",
          },
        },
      },
      {
        id: "Paragraphedeliste",
        name: "List Paragraph",
        basedOn: "Normal",
        paragraph: {
          spacing: {
            line: 259,
            lineRule: "auto",
          },
          indent: {
            left: 720,
          },
        },
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: {
            width: 11906,
            height: 16838,
          },
          margin: {
            top: 1417,
            right: 1417,
            bottom: 1417,
            left: 1417,
            header: 708,
            footer: 708,
            gutter: 0,
          },
        },
        column: {
          space: 708,
        },
        grid: {
          linePitch: 360,
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              style: "En-tte",
            }),
            new Paragraph({
              style: "En-tte",
            }),
            new Paragraph({
              style: "En-tte",
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  children: [new Tab()],
                  color: "#808080",
                  size: 20,
                }),
                new TextRun({
                  children: [new Tab()],
                  color: "#808080",
                  size: 20,
                }),
                new TextRun({
                  text: "Page ",
                  color: "#808080",
                  size: 20,
                }),
                new TextRun({
                  children: [PageNumber.CURRENT],
                  color: "#808080",
                  bold: true,
                  size: 20,
                }),
                new TextRun({
                  text: " sur ",
                  color: "#808080",
                  size: 20,
                }),
                new TextRun({
                  children: [PageNumber.TOTAL_PAGES],
                  color: "#808080",
                  bold: true,
                  size: 20,
                }),
              ],
              style: "Pieddepage",
            }),
          ],
        }),
      },
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: "[Denomination_sociale] ",
              bold: true,
              highlight: "yellow",
            }),
            new TextRun({
              text: "OU",
              color: "#C00000",
              underline: {
                type: "single",
              },
              bold: true,
              highlight: "lightGray",
            }),
            new TextRun({
              text: " ",
              color: "#C00000",
              bold: true,
              highlight: "lightGray",
            }),
            new TextRun({
              text: "[UES]",
              bold: true,
              highlight: "lightGray",
            }),
          ],
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          children: [
            new TextRun("[Forme_juridique]"),
            new TextRun({
              text: " ",
              color: "#FF0000",
            }),
            new TextRun({
              text: "au capital de [Capital]",
              highlight: "yellow",
            }),
          ],
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "RCS de [Greffe] n°[SIREN] ",
              highlight: "yellow",
            }),
            new TextRun({
              text: "OU",
              color: "#C00000",
              underline: {
                type: "single",
              },
              bold: true,
              highlight: "yellow",
            }),
            new TextRun({
              text: " RNA n°[RNA]",
              highlight: "yellow",
            }),
          ],
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          text: "[Adresse_1_siège]",
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
        }),
        new Paragraph({
          text: "[Adresse_2_siège]",
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
        }),
        new Paragraph({
          text: "[CP_siège] [Ville_siège]",
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          children: [
            new TextRun("A [Ville_siège], le "),
            new TextRun({
              text: "[Date_Du_Jour]",
              font: "Calibri",
            }),
          ],
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "right",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "NOTE DE SERVICE",
              bold: true,
              size: 28,
            }),
          ],
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "center",
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Version actualisée du [Date_Du_Jour]",
              bold: true,
            }),
          ],
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "center",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Objet :",
              underline: {
                type: "single",
              },
              bold: true,
            }),
            new TextRun(
              " Élections du Comité Social et Economique (CSE) – Version actualisée des listes électorales",
            ),
          ],
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          text: "Les salariés mentionnés ci-dessous qui ont le statut d’électeur (droit de vote) recevront bientôt des codes d’accès comportant les informations de connexion à la plateforme de vote électronique pour les élections qui se tiendront prochainement.",
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          spacing: {
            after: 0,
          },
          alignment: "both",
        }),
        new Paragraph({
          text: "Les salariés qui ont, en outre du statut d’électeur, le statut d’éligible, peuvent se porter candidat pour le 1er tour (candidatures syndicales) ou, le cas échéant, pour le 2nd tour (candidatures libres). Les modalités vous sont précisées dans le protocole d’accord préélectoral.",
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          text: "Le 1er tour des élections est prévu :",
          spacing: {
            after: 0,
          },
          alignment: "both",
        }),
        new Paragraph({
          children: [
            new TextRun("Du "),
            new TextRun({
              text: "[Ouverture_T1]",
              font: "Calibri",
            }),
            new TextRun(" à partir de "),
            new TextRun({
              text: "[Heure_ouverture_T1]",
              font: "Calibri",
            }),
          ],
          spacing: {
            after: 0,
          },
          alignment: "center",
          indent: {
            left: 1416,
          },
        }),
        new Paragraph({
          children: [
            new TextRun("au "),
            new TextRun({
              text: "[Fermeture_T1] ",
              font: "Calibri",
            }),
            new TextRun("jusqu’à "),
            new TextRun({
              text: "[Heure_fermeture_T1]",
              font: "Calibri",
            }),
          ],
          spacing: {
            after: 0,
          },
          alignment: "center",
          indent: {
            left: 1416,
          },
        }),
        new Paragraph({
          spacing: {
            after: 0,
          },
          alignment: "both",
        }),
        new Paragraph({
          children: [
            new TextRun("En cas de 2nd tour, il est prévu"),
            new TextRun({
              text: " ",
              bold: true,
            }),
            new TextRun(":"),
          ],
          spacing: {
            after: 0,
          },
          alignment: "both",
        }),
        new Paragraph({
          children: [
            new TextRun("Du "),
            new TextRun({
              text: "[Ouverture_T2]",
              font: "Calibri",
            }),
            new TextRun(" à partir de "),
            new TextRun({
              text: "[Heure_ouverture_T2]",
              font: "Calibri",
            }),
          ],
          spacing: {
            after: 0,
          },
          alignment: "center",
          indent: {
            left: 1416,
          },
        }),
        new Paragraph({
          children: [
            new TextRun("au "),
            new TextRun({
              text: "[Fermeture_T2] ",
              font: "Calibri",
            }),
            new TextRun("jusqu’à "),
            new TextRun({
              text: "[Heure_fermeture_T2]",
              font: "Calibri",
            }),
          ],
          spacing: {
            after: 0,
          },
          alignment: "center",
          indent: {
            left: 1416,
          },
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Liste électorale du ",
              bold: true,
            }),
            new TextRun({
              text: "[Nom_1C]",
              font: "Calibri",
            }),
          ],
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "center",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "center",
        }),
        new Table({
          style: "TableauGrille1Clair",
          width: {
            size: 0,
            type: "auto",
          },
          columnWidths: [1500, 1510, 1003, 1567, 1754, 1728],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 2137,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Nom",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1944,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Prénom",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1287,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Age",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "(à la date du 1er tour)",
                          italics: true,
                          size: 20,
                        }),
                      ],
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1793,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Date d’entrée dans l’entreprise",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 964,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Electeur",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "([anciennete_elec]  mois d’ancienneté à la date du 1er tour)",
                          italics: true,
                          size: 20,
                        }),
                      ],
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 937,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Eligible",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "([anciennete_elig]  mois d’ancienneté à la date du 1er tour)",
                          italics: true,
                          size: 20,
                        }),
                      ],
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 2137,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1944,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  width: {
                    size: 1287,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1793,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 964,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: " ",
                          color: "#00B050",
                          bold: true,
                          size: 20,
                        }),
                      ],
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 937,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 2137,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1944,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  width: {
                    size: 1287,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1793,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 964,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 937,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Liste électorale du ",
              bold: true,
            }),
            new TextRun({
              text: "[Nom_2C]",
              font: "Calibri",
            }),
          ],
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "center",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "center",
        }),
        new Table({
          style: "TableauGrille1Clair",
          width: {
            size: 0,
            type: "auto",
          },
          columnWidths: [1499, 1510, 1003, 1568, 1754, 1728],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1862,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Nom",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1757,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Prénom",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1165,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Age",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "(à la date du 1er tour)",
                          italics: true,
                          size: 20,
                        }),
                      ],
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1696,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Date d’entrée dans l’entreprise",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1291,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Electeur",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "([anciennete_elec]  mois d’ancienneté à la date du 1er tour)",
                          italics: true,
                          size: 20,
                        }),
                      ],
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1291,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Eligible",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "([anciennete_elig]  mois d’ancienneté à la date du 1er tour)",
                          italics: true,
                          size: 20,
                        }),
                      ],
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1862,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1757,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  width: {
                    size: 1165,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1696,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1291,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1291,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1862,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1757,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  width: {
                    size: 1165,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1696,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1291,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1291,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Liste électorale du ",
              bold: true,
            }),
            new TextRun({
              text: "[Nom_3C]",
              font: "Calibri",
            }),
          ],
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "center",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "center",
        }),
        new Table({
          style: "TableauGrille1Clair",
          width: {
            size: 0,
            type: "auto",
          },
          columnWidths: [1499, 1510, 1003, 1568, 1754, 1728],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1862,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Nom",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1757,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Prénom",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1165,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Age",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "(à la date du 1er tour)",
                          italics: true,
                          size: 20,
                        }),
                      ],
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1696,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Date d’entrée dans l’entreprise",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1291,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Electeur",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "([anciennete_elec]  mois d’ancienneté à la date du 1er tour)",
                          italics: true,
                          size: 20,
                        }),
                      ],
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "center",
                  shading: {
                    color: "auto",
                    fill: "#F2F2F2",
                    type: "clear",
                  },
                  width: {
                    size: 1291,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      text: "Eligible",
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "([anciennete_elig]  mois d’ancienneté à la date du 1er tour)",
                          italics: true,
                          size: 20,
                        }),
                      ],
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1862,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1757,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  width: {
                    size: 1165,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1696,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1291,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1291,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1862,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1757,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  width: {
                    size: 1165,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1696,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1291,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
                new TableCell({
                  verticalAlign: "bottom",
                  width: {
                    size: 1291,
                    type: "dxa",
                  },
                  children: [
                    new Paragraph({
                      spacing: {
                        line: 276,
                        lineRule: "auto",
                      },
                      alignment: "center",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          spacing: {
            after: 0,
            line: 276,
            lineRule: "auto",
          },
          alignment: "both",
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "La Direction",
              bold: true,
            }),
          ],
          spacing: {
            after: 0,
          },
          alignment: "right",
        }),
        new Paragraph({
          text: "[Représentant_Prénom] [Représentant_Nom]",
          spacing: {
            after: 0,
          },
          alignment: "right",
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "[Représentant_Fonction]",
              font: "Calibri",
            }),
          ],
          spacing: {
            after: 0,
          },
          alignment: "right",
        }),
        new Paragraph({}),
      ],
    },
  ],
});
