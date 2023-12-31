// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk.toString();
    });
    req.on("end", () => {
      fs.appendFileSync("data.txt", data);
      console.log(fs.readFileSync("data.txt", "utf-8"));
    });
    res.end("data received");
  }
});

export default server;
