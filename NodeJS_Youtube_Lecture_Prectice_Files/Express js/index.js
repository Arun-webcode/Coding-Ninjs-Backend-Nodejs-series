const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send(
    `<h1>Welcome, to Home page</h1><a href="/about">Go to about Page</a>`
  );
});

app.get("/about", (req, res) => {
  res.send(`
  <input type="text" placeholder="User Name" value="${req.query.name}"/>
  <button>Click me</button>
  <a href="/">Go to home Page</a>
  `);
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Arun",
      email: "abc@gmail.com",
    },
    {
      name: "Payal",
      email: "anklet.52nii@getMaxListeners.com",
    },
  ]);
});

app.listen(5000);
