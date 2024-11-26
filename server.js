const express = require("express");
const app = require('./app')
const http = require("http");
const port = 3000;

const server = http.createServer(app);

app.listen(port, () => {
  console.log("Server is running on port 3000! 😁");
});
