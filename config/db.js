const mongoConfig = require('./mongodb');
const psqlConfig = require('./psql');

const dbConfig = {
  mongo: mongoConfig,
  psql: psqlConfig,
};
module.exports = dbConfig;
