//mom of the project-tells kid files where to go, how to do things, whenever use routes, use controllers, use handlebars, its in handlebars, make a req go through session, check if cookie is expired

//import modules
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

//import sequelize
const sequelize = require("./config/connection");

//creates new sequelize store using express package
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//express initialization
const app = express();
const PORT = process.env.PORT || 3001;

//handlebars initialization
const hbs = exphbs.create({ helpers });

//session options
const sess = {
  //secret protects the session
  secret: "super secret secret",
  //cookie defines aspects of the session
  cookie: {
    maxAge: 60 * 60 * 1000, //each session will last an hour
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//session initialization
app.use(session(sess));

//handlebars initialization
app.engine("handlebars", hbs.engine);
//connect express to handlebars initialization
app.set("view engine", "handlebars");

//express middleware json parser
app.use(express.json());
//express middleware url parser
app.use(express.urlencoded({ extended: true }));
//express middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

//connect routes to express
app.use(routes);

//sync sequelize models to database, then turn on server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
