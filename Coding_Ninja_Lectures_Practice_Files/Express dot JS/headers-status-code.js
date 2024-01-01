const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send("Hello World! This is express server");
});

server.post("/", (req, res) => {
  res.status(201).send("Post request received");
});

server.put("/", (req, res) => {
  res.put("Put request received");
});

server.delete("/", (req, res) => {
  res.send("Delete request received");
});
