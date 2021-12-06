const yargs = require("yargs");

// Create add and remove command
yargs.command([
  {
    command: "add",
    describe: "Add a new note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true, // Agar menjadi required
        type: "string",
      },
      body: {
        describe: "Note body",
        demandOption: true, // Default is false
        type: "string",
      },
    },
    handler: (argv) => {
      console.log("Title: " + argv.title + "\nBody: " + argv.body);
    },
  },
  {
    command: "remove",
    describe: "Remove a note",
    handler: () => {
      console.log("Remove a note...");
    },
  },
  {
    command: "list",
    describe: "List the notes",
    handler: () => {
      console.log("Listing the notes...");
    },
  },
  {
    command: "read",
    describe: "Read the note",
    handler: () => {
      console.log("Try to reading the note...");
    },
  },
]);

console.log(yargs.argv);
