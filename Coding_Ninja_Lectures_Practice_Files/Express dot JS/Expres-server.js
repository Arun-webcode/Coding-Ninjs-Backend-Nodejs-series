const express = require("express");

const server = express();

server
  .get("/", (req, res) => {
    res.send("Welcom to express server");
  })
  .listen(3100, () => {
    console.log("Server is listening on 3100");
  });
