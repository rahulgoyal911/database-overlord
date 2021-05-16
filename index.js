require('dotenv').config();
const dbConfig = require('./config/db');
const { logger } = require('./utils/logger');

let client = null;
// mongodb
client = dbConfig.mongo.connect(process.env.mongo_uri);
if (client) {
  logger.info(client);
}

// mysql
client = dbConfig.mysql.connect(
  process.env.mysql_user,
  process.env.mysql_host,
  process.env.mysql_database,
  process.env.mysql_password,
  process.env.mysql_port,
);
if (client) {
  logger.info(client);
}

// postgresql
client = dbConfig.psql.connect(
  process.env.psql_user,
  process.env.psql_host,
  process.env.psql_database,
  process.env.psql_password,
  process.env.psql_port,
);
if (client) {
  logger.info(client);
}

// cassandra
client = dbConfig.cassandra.connect(
  process.env.psql_host,
  process.env.psql_datacenter,
  process.env.psql_username,
  process.env.psql_password,
);
if (client) {
  logger.info(client);
}
