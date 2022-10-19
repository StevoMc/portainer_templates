import temp from "./template_unsorted.json" assert { type: "json" };
import template_portainer from "./templates/template_portainer.json" assert { type: "json" };
import template_qballjos from "./templates/template_qballjos.json" assert { type: "json" };
import template_technorabilia from "./templates/template_technorabilia.json" assert { type: "json" };
import fs from "fs";

let template_struc = {
  version: "2",
  templates: [],
};
let new_templates = [];

// PUSH ALL TEMPLATES TO NEW TEMPLATES ARRAY
template_portainer.templates.forEach((template) => {
  new_templates.push(template);
});
template_qballjos.templates.forEach((template) => {
  new_templates.push(template);
});
template_technorabilia.templates.forEach((template) => {
  new_templates.push(template);
});

// SORT THE ARRAY BY NAME
template_struc.templates = new_templates.sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  }
});

const newData = JSON.stringify(template_struc, null, 2);
fs.writeFileSync("template_all.json", newData);

// SORT THE JSON FILE
temp.templates = temp.templates.sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  }
});

let data = JSON.stringify(temp, null, 2);
fs.writeFileSync("template_sorted.json", data);
