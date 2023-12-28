const fs = require("fs");
const path = require("path");

// Readfile data
const filePath = path.join("src", "home", "data.txt"); // it prints relative path
const filePathResolved = path.resolve("src", "home", "data.txt"); // it prints absolute path

console.log(filePath);
console.log(filePathResolved);
console.log(path.extname(filePathResolved)); // it is uysed to find file extansion
fs.readFile(filePathResolved, (err, data) => {
  if (err) {
    console.log();
  } else {
    console.log(data.toString());
  }
});
