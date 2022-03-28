const express = require("express");
const router = express.Router();
const { get_blogposts, get_postBlogPage, post_newBlog, get_post, delete_post, get_editBlogPost, put_editBlogPost } = require("../controllers/blog");

router.get("/", get_blogposts);
router.get("/post", get_postBlogPage);
router.post("/api/post", post_newBlog);
router.get("/:slug", get_post);
router.get("/edit/:slug", get_editBlogPost);
router.put("/api/edit/:slug", put_editBlogPost);
router.delete("/:id", delete_post);

module.exports = router;
