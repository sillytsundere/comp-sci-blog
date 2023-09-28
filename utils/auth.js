const withAuth = (req, res, next) => {
//the 'next' is because it is middleware correct?
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;