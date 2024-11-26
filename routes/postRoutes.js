const express = require("express");
const postsController = require("../controllers/postController");

const router = express.Router();

router.route('/').get(postsController.getAllPosts);

module.exports = router;