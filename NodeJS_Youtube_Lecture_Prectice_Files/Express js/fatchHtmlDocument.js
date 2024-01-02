const path = require("path");
const express = require("express");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

// app.use(express.static(publicPath)); // for not showing tech ifor on url we cant use this approach

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/home.html`);
});

app.get("/profile", (_, res) => {
  const user = {
    name: "Arun",
    email: "akp1029@gmail.com",
    city: "Faridabad",
    skills: ["PHP", "JS", "C++", "python"],
  };
  res.render("profile", { user });
});

app.get("/login", (_, res) => {
  res.render("login");
});

app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (_, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/error.html`);
});
app.listen(5000);
