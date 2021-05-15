require('dotenv').config();
const dbConfig = require('./config/db');
const { logger } = require('./utils/logger');

const client = dbConfig.mongo.connect(process.env.mongo_uri);

if (client) {
  logger.info(client);
}
