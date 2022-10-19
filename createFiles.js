import fs from "fs";
import request from "request";

request(
  "https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Template/template.json",
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    let dataParsed = JSON.stringify(body, null, 2);
    fs.writeFileSync("template_qballjos.json", dataParsed);
  }
);

request(
  "https://raw.githubusercontent.com/technorabilia/portainer-templates/main/lsio/templates/templates-2.0.json",
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    let dataParsed = JSON.stringify(body, null, 2);
    fs.writeFileSync("template_technorabilia.json", dataParsed);
  }
);
request(
  "https://raw.githubusercontent.com/portainer/templates/master/templates-2.0.json",
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    let dataParsed = JSON.stringify(body, null, 2);
    fs.writeFileSync("template_portainer.json", dataParsed);
  }
);
