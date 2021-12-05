const fs = require("fs");

try {
  fs.appendFileSync("note.txt", "Irlan Navila");
} catch (err) {
  console.log(err);
}
