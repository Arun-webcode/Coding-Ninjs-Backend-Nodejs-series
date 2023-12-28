const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    // expecting data from clint
    body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(body);
      res.end("Data is received");
    });
  } else {
    console.log("function ends here");
    res.end("Welcom to Node.js");
  }
});

server.listen(3100);

console.log("Server is listening on 3100");
