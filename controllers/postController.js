exports.getAllPosts = (req, res) => {
// const getAllPosts = (req, res) => {
  const posts = "POSTS SUPPOSED TO BE HERE!";
  res.status(200).send({
    status: "success",
    message: "Posts successfully retrieved",
    data: posts,
  });
};

// module.exports = getAllPosts;
