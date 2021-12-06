const command = process.argv[2];

if (command === "add") {
  console.log("Menambahkan file...");
} else if (command === "remove") {
  console.log("Menghapus file...");
} else {
  console.log("Perintah tidak dikenali, silahkan mencoba kembali!");
}
