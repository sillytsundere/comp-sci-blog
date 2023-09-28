const router = require('express').Router();
const sequelize = require("./config/connection");
//const { User } = require('../models');

//the home-routes are for views to be rendered on the homepage

//homepage display
router.get('/', (req, res) => {
  try {


    res.render('homepage', {
      logged_in: req.session.logged_in
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//signup route
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('sign-up');
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  

//route to view/render the blog posts go? //go in home routes where all rendering occurs
router.get('')



  module.exports = router;