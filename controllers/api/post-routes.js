const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const sequelize = require("../../config/connection");
const withAuth = require('../../utils/auth');

//route to create new post
router.post('/new-post', withAuth, async(req, res) => {
    console.log("new post before try");
    try {
        console.log("new post");
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });

        res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//route to delete the post

module.exports = router;