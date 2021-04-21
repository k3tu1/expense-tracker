const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 5000;
const publicDirectoryPath = path.join(__dirname, "../build");

//making directory to public to serve to client
app.use(express.static(publicDirectoryPath));

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
