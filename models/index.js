//import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


//write relationships for models
//relate user to posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
//relating postss to user
Post.belongsTo(User, {
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

//relating posts to comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});
//relating comments to posts
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

//export models
module.exports = { User, Post, Comment };