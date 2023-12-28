const express = require("express");
const app = express();

app.get("", (req, res) => {
  console.log("Data sent by browser =>>>", req.query.name);
  res.send("Welcome, this is home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome, this is about page");
});

app.get("/help", (req, res) => {
  res.send("Welcome, this is help page");
});

app.listen(5000);
