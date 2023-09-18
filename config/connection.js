const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
//what is this for?

if (process.env.JAWSDB_URL) {
    //what is JAWSDB_URL?
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    //does this create a port for Sequelize or for mysql?
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;