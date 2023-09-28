const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const sequelize = require("../../config/connection");
const withAuth = require('../../utils/auth');


module.exports = router;