const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "files");

// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirpath + `/hello${i}.txt`, "a simple tet file"); // dirpath gives path to file and after file '/' and file name gives access inside 'files' folder
// }

fs.readdir(dirpath, (err, files) => {
  files.forEach((item) => {
    console.log(`File name is> ${item}`);
  });
});
