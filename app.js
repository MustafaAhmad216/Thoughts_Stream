const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "Welcome to my Blogging System API!",
  });
});

app.get("/blog", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "Welcome to My BLOG!!!",
  });
});

module.exports = app;
