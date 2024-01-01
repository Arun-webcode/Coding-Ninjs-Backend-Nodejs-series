const express = require("express");

const server = express();

server.get("/", (req, res, next) => {
  // First middleware
  console.log("This is first middleware");
  next();
});
server
  .get("/", (req, res) => {
    // Last middlebare
    res.send("Response by last middleware");
  })
  .listen(3100, () => {
    console.log("Server is listening on 3100");
  });
