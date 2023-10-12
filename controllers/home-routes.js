const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");
const withAuth = require('../utils/auth');

//the home-routes are for views to be rendered on the homepage

//homepage display
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// render signup page route
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("sign-up");
});

// render the login page route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//route to view/render individual blog posts 
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: { id: req.params.id },
      attributes: ["id", "title", "content", "date_created"],
      include: [
        { model: User, attributes: ["username"] },
        ]
    });
    const post = postData.get({ plain: true });

    const commentData = await Comment.findAll({
      where: { post_id: req.params.id },
      attributes: ["id", "comment_text", "date_created", "user_id", "post_id"],
      include: [
        { model: User, attributes: ["username"] },
        ]
    });
    const comments = commentData.map((project) => project.get({ plain: true }));

    res.render('single-post', {
      post,
      comments,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
