const express = require("express");
const Article = require("../../db").Article;
const Author = require("../../db").Author;
const Category = require("../../db").Category;
const Review = require("../../db").Review;
const { Op, Sequelize } = require("sequelize");
const router = express.Router();

router.route("/:articleId").get(async (req, res, next) => {
  try {
    const article = await Article.findAll({
      where: { id: req.params.userId },
    });

    res.send({ articles: article});
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
