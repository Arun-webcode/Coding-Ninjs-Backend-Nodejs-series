const fs = require("fs"); // import filesystem package

const input = process.argv; // a property that holds an array of command-line values provided when the current process was initiated.

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]); // writefilesync used to add a new file
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]); // unlinksyc used to remove file
} else {
  console.log("invalid input");
}
