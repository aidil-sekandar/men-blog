const express = require("express");
const router = express.Router();
const controller = require("../controllers/blog");

router.get("/", controller.showAllArticles);
router.get("/post", controller.showPostArticlePage);
router.get("/:slug", controller.showArticlePage);
router.delete("/:id", controller.deleteArticle);
router.get("/edit/:id", controller.showEditArticlePage);
router.put("/api/edit/:slug", controller.updateEditedArticle);
router.post("/api/post", controller.postNewArticle);

module.exports = router;
