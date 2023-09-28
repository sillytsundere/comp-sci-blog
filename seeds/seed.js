const sequelize = require("../config/connection");
const { User, Blog, Comment } = require("../models");

const userData = require("./user-data.json");
const blogData = require("./blog-data.json");
const commentData = require("./comment-data.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  //this force: true overwrites any tables if they already exist, basically drop if exists

  await User.bulkCreate(userData, { individualHooks: true });

  await Blog.bulkCreate(blogData);

  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
