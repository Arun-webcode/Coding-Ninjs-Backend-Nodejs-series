// Write your code here

import * as fs from "fs";

export const writeBlog = (filePath, name) => {
  fs.appendFileSync(filePath, name);
};
export const publishBlog = (filePath) => {
  return fs.readFileSync(filePath, { encoding: "utf8" });
};
