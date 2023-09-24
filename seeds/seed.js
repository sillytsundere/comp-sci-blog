const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./user-data.json');
const blogData = require('./blog-data.json');
const commentData = require('./comment-data.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true }); //what is this part for?

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true, //i know why we need to say the hooks are present but the returning?
    });

    await Blog.bulkCreate(blogData);

    await Comment.bulkCreate(commentData);
}