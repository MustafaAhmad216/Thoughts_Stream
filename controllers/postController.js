const Post = require("../models/post");
const models = require("../models");

exports.getAllPosts = async (req, res) => {
  //   const posts = "POSTS SUPPOSED TO BE HERE!";
  const posts = await models.Post.findAll();

  res.status(200).send({
    status: "success",
    posts: posts.length,
    message: "Posts successfully retrieved",
    data: posts,
  });
};

exports.getPost = async (req, res, next) => {
  const id = req.params.id;

  //   if (!id) {
  //     return next(
  //       new Error(`No record found with that ID: ${req.params.id}`, 404)
  //     );
  //   }

  const post = await models.Post.findByPk(id);
  if (post) {
    res.status(200).json({
      status: "success",
      message: "Post successfully retrieved",
      data: post,
    });
  } else {
    res.status(404).json({
      status: "error",
      message: `No record found with that ID: ${req.params.id}`,
    });
  }
};

exports.createPost = async (req, res) => {
  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryId: req.body.categoryId,
    userId: 1,
  };
  //   const post = await req.body;

  models.Post.create(post)
    .then((result) => {
      res.status(201).send({
        status: "success",
        message: "Post successfully created",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "error",
        message: "Something went wrong!",
        error: err.message,
      });
    });
};

exports.updatePost = async (req, res) => {
  const id = req.params.id;
  const userId = 1;

  const updatedPost = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryId: req.body.categoryId,
  };

  const updated = await models.Post.update(updatedPost, {
    where: { id: id, userId: userId },
  });

  if (updated) {
    res.status(200).json({
      status: "success",
      message: "Post successfully updated",
      updatedPost,
    });
  } else {
    res.status(404).json({
      status: "error",
      message: `No record found with that ID: ${id}`,
    });
  }
};

exports.deletePost = async (req, res) => {
  const id = req.params.id;
  const userId = 1;

  const post = await models.Post.findByPk(id); 
  if (!post) {
    return res.status(404).json({
      status: "error",
      message: `No record found with that ID: ${id}`,
    });
  }

  await models.Post.destroy({
    where: {
      id: id,
      userId: userId,
    },
  });

  res.status(200).send({
    status: "success",
    message: "Post is successfully Deleted",
  });
};

exports.deleteAllPosts = async (req, res) => {
  await models.Post.destroy({
    truncate: true,
  });

  res.status(200).send({
    status: "success",
    message: "All posts are successfully Deleted",
  });
};
