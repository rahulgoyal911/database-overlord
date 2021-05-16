const mongoConfig = require('./mongodb');
const psqlConfig = require('./psql');
const mysqlConfig = require('./mysql');

const dbConfig = {
  mongo: mongoConfig,
  psql: psqlConfig,
  mysql: mysqlConfig,
};
module.exports = dbConfig;
