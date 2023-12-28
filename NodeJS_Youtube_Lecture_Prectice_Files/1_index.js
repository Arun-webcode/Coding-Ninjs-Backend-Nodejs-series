const data = require("./data");

const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" }); //for making every file like this we necessary need to maintain ous HEADER in detailed, like as first argument is status(200) of the server.

    res.write(JSON.stringify(data)); //stringify() method converts JavaScript objects into strings. When sending data to a web server the data has to be a string.

    res.end(); // its necessary to end the responce
  })
  .listen(5000);
