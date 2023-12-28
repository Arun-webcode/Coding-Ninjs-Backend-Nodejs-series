// Please do not change the prewritten code

const { error } = require("console");
const fs = require("fs");

const Solution = () => {
  fs.appendFile("note.txt", "new data", (data, err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data updated successfully");
    }
  });

  fs.readFile("note.txt", "utf-8", (data, err) => {
    if (err) console.log(err);
    else console.log(data);
  });

  fs.unlink("note.txt", (err) => {
    if (err) {
      console.log(error);
    }
  });
};
Solution();
module.exports = Solution;
