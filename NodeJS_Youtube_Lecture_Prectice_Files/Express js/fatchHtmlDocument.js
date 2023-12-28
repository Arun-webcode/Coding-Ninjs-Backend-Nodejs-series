const path = require("path");
const express = require("express");

const app = express();
const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath)); // for not showing tech ifor on url we cant use this approach

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (_, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

app.get("*", (_, res) => {
  res.send(`${publicPath}/error.html`); // There is error in my ec in this router because when i putted another word then it is showing simple error not reloaded error file.
});
app.listen(5000);
