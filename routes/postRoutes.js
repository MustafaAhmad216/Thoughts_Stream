const express = require("express");
const postsController = require("../controllers/postController");

const router = express.Router();

router
  .route("/")
  .get(postsController.getAllPosts)
  .post(postsController.createPost)
  .delete(postsController.deleteAllPosts);

router
  .route("/:id")
  .get(postsController.getPost)
  .patch(postsController.updatePost)
  .delete(postsController.deletePost);

module.exports = router;
