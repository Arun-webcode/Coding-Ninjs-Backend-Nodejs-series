const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("Welcome to Express");
});

server.listen(3300);

console.log("Server is listening on port 3300");
