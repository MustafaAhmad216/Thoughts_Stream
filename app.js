const express = require("express");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "Welcome to my Blogging System API!",
  });
});

// app.get("/blog", (req, res) => {
//   res.status(200).send({
//     status: "success",
//     message: "Welcome to My BLOG!!!",
//   });
// });

app.use(bodyParser.json());

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/users", userRoutes);

module.exports = app;
