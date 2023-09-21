//import models
const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');


//write relationships for models
//relate user to blogs
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
//relating blogs to user
Blog.belongsTo(User, {
    foreignKey: 'user_id', //why are the foreign keys the same here? for this relationship,
});
//both the has many and belongs to define the one to many relationship, so it takes two statements to define the relationship

//relating user to comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});
//relating comments to user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

//relating blogs to comments
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
});
//relating comments to blogs
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
});

//export models
module.exports = { User, Blog, Comment };