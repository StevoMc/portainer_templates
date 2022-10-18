import temp from "./template.json" assert { type: "json" };
import fs from "fs";

temp.templates = temp.templates.sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  }
});

let data = JSON.stringify(temp, null, 2);

fs.writeFileSync("template-sorted.json", data);
