const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, "This is a simple text file.");

// fs.readFile(filePath, "Utf8", (err, item) => {
//   console.log(item);
// });

// fs.appendFile(filePath, "and file name is apple.txt", (err) => {
//   if (!err) {
//     console.log("file is updated");
//   } else {
//     console.log("file is not updated");
//   }
// });

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) {
//     console.log("file name is updated");
//   } else {
//     console.log("file name is not updated");
//   }
// });

// fs.unlinkSync(`${dirPath}/fruit.txt`); // delete file

// buffer is the temporary memory loction while we create a new file then node needs a small memory called buffer
