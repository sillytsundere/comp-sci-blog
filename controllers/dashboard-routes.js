const router = require('express').Router();
const sequelize = require("./config/connection");
const withAuth = require('../utils/auth');

//the dashboard-routes are for views to be rendered on the dashboard(which serves as the user's profile)

//dashboard display
//this will display the session user's blog posts
router.get('/', withAuth, (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//route for viewing the comments on user's own blog post


//edit user's own posts route, so will need to display the single blog post they clicked on to edit
router.get('/')


//route to view page for making a new blog post

