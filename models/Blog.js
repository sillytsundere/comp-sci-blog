const { Model, Datatypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Blog extends Model {}

Blog.init(
  {
    //define columns
    id: {},
    title: {},
    description: {},
    date_created: {},
    user_id: {},
  },
  {
    //what is this for?
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = Blog;
