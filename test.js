const fs = require("fs");

// const dev = [
//   {
//     name: "Irlan Navila",
//     role: "Frontend",
//   },
//   {
//     name: "Trangs Arya",
//     role: "Designer",
//   },
//   {
//     name: "Nandhyto Maruli",
//     role: "Backend",
//   },
//   {
//     name: "Zildjian Agisky",
//     role: "Project Manager",
//   },
// ];

// const devJSON = JSON.stringify(dev);

// fs.writeFileSync("db.json", devJSON);

const readFile = fs.readFileSync("db.json");
const dataJSON = readFile.toString();
data = JSON.parse(dataJSON);

console.log(data);
