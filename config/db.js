const mongoConfig = require('./mongodb');
const psqlConfig = require('./psql');
const mysqlConfig = require('./mysql');
const cassandraConfig = require('./cassandra');

const dbConfig = {
  mongo: mongoConfig,
  psql: psqlConfig,
  mysql: mysqlConfig,
  cassandra: cassandraConfig,
};
module.exports = dbConfig;
