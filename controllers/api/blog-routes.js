const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const sequelize = require("./config/connection");
const withAuth = require('../utils/auth');

//where should route to view/render the blog posts go? 

//route to create new blog

//route to delete the blog

module.exports = router;