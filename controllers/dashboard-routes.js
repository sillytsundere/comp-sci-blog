const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");
const { User, Post, Comment } = require("../models");

//the dashboard-routes are for views to be rendered on the dashboard(which serves as the user's profile)

//dashboard display
//this will display the session user's blog posts
router.get("/", withAuth, async (req, res) => {
  try {
    //need to get post data to display cards of blog posts, with button to click them to view post and comments
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User }],
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//route to render page for editing a user's post
//will need to display the single blog post they clicked on to edit
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: { id: req.params.id },
      attributes: ["id", "title", "content", "date_created", "user_id"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "date_created",
            "user_id",
            "post_id",
          ],
          include: { model: User, attributes: ["username"] },
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render("edit-post", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//route to view page for making a new blog post
router.get("/new", withAuth, async (req, res) => {
  try {
    res.render("new-post", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
