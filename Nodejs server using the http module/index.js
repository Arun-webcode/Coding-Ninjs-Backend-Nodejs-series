const http = require("http");

const server = http.createServer((req, res) => {
  const resMessage = "I am a Ninja";
  res.end(resMessage);
});
const port = 3100;
server.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});

module.exports = server;
