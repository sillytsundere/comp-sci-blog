const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./user-data.json");
const postData = require("./post-data.json");
const commentData = require("./comment-data.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  //this force: true overwrites any tables if they already exist, basically drop if exists

  await User.bulkCreate(userData, { individualHooks: true });

  await Post.bulkCreate(postData);

  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
