import { Packer } from "docx";
import { template } from "./test";
import fs from "fs";
import { convertor } from ".";

it("Test Convertor", async () => {
  await convertor(`${__dirname}/sample.docx`, true);
  const buffer = await Packer.toBuffer(template);
  fs.writeFileSync(`${__dirname}/testConvertor.docx`, buffer);
});
