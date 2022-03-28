const blogModel = require("../models/blogModel");

module.exports = {
  get_blogposts: async (req, res) => {
    const articles = await blogModel.find();
    res.status(200).render("blog.ejs", { articles });
  },
  get_postBlogPage: (req, res) => {
    res.status(200).render("postBlog.ejs");
  },
  post_newBlog: async (req, res) => {
    let article = new blogModel({
      title: req.body.title,
      blogpost: req.body.blogpost,
      author: req.body.author,
      slug: req.body.slug,
    });
    try {
      article = await article.save();
      res.redirect(`/blog/${req.body.slug}`);
    } catch (err) {
      res.send(err);
    }
  },
  get_post: async (req, res) => {
    const article = await blogModel.findOne({ slug: req.params.slug });
    res.render("blogpost.ejs", { article });
  },
  delete_post: async (req, res) => {
    const id = req.params.id;
    await blogModel.findByIdAndDelete(id);

    res.redirect("/blog");
  },
  get_editBlogPost: async (req, res) => {
    const article = await blogModel.findOne({ slug: req.params.slug });
    res.render("editPost.ejs", { article, selected: "true" });
  },
  put_editBlogPost: async (req, res) => {
    req.article = await blogModel.findOne({ slug: req.params.slug });
    let article = req.article;
    article.title = req.body.title;
    article.author = req.body.author;
    articles.blogpost = req.body.blogpost;
    article.slug = req.body.slug;
    try {
      article = await article.save();
      res.redirect("/blog");
    } catch (e) {
      res.send(404);
    }
  },
};
