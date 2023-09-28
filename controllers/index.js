const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/api', apiRoutes); //directing server to api folder in controllers folder
router.use('/', homeRoutes); //directing server to home-routes file in controllers folder
router.use('/dashboard', dashboardRoutes); //directing server to dashboard-routes file in controllers folder

module.exports = router;