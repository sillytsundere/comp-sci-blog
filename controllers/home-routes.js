const router = require('express').Router();
//const { User } = require('../models');
//const sequelize = require("./config/connection");

//routes used to render the page

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
  
  module.exports = router;