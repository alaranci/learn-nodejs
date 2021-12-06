const fs = require("fs");

const readFile = fs.readFileSync("./other-db.json");
const dataJSON = readFile.toString();
const data = JSON.parse(dataJSON);
data.name = "Arayra";

fs.writeFileSync("./other-db.json", JSON.stringify(data));
