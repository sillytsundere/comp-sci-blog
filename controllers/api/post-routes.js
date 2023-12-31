const router = require('express').Router();
const { Post, Comment } = require('../../models');
const sequelize = require("../../config/connection");
const withAuth = require('../../utils/auth');

//route to create new post
router.post('/', withAuth, async(req, res) => {
    try {
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
router.put('/edit/:id', withAuth, async(req, res) => {
    try {
        const [selectedPost] = await Post.update(
            req.body, {
                where: {
                    id: req.params.id,
                },
            }
        );
        if(selectedPost > 0) {
            res.status(200).json("Successfully updated post.");
        } else {
            res.status(404).json("Unable to update post.");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//route to delete the post
router.delete('/delete/:id', withAuth, async(req, res) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.id,
            },
          }
        );
        res.redirect('/dashboard');

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//route to add comment to a post
router.post('/comment', withAuth, async(req, res) => {
    try {
        await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.redirect(`/post/${req.body.post_id}`);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


module.exports = router;