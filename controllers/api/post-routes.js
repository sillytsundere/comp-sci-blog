const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const sequelize = require("../../config/connection");
const withAuth = require('../../utils/auth');

//route to create new post
router.post('/', withAuth, async(req, res) => {
    console.log("new post before try");
    try {
        console.log("new post");
        const postData = await Post.create({
            // title: req.body.title,
            // content: req.body.content,
            ...req.body,
            user_id: req.session.user_id,
        });

        res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//route to edit a post
router.put('/:id', withAuth, async(req, res) => {
    try {
        const [selectedPost] = await Post.update(
            req.body, {
                where: {
                    id: req.params.id,
                },
            }
        );
        if(selectedPost > 0) {
            res.status(200);
            alert("Successfully updated post.");
        } else {
            res.status(404);
            alert("Unable to update post.");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//route to delete the post
router.delete('/:id', withAuth, async(req, res) => {
    try {
        const [selectedPost] = await Post.destroy(
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if(selectedPost > 0) {
            res.status(200);
            alert("Successfully deleted post.");
        } else {
            res.status(404);
            alert("Unable to delete post.");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//route to add comment to a post


module.exports = router;