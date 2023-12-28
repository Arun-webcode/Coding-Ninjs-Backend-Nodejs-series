// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
const http = require("http");
const fs = require("fs");
const port = 8080;
const server = http.createServer((req, res) => {
  const data = fs.readFileSync("./index.html").toString();
  return res.end(data);
});

server.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
module.exports = server;
