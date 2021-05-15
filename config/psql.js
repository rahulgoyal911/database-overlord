const { Client } = require('pg');
const { logger } = require('../utils/logger');

const psqlConfig = {
  async connect(user, host, database, password, port) {
    const client = new Client({
      user,
      host,
      database,
      password,
      port,
    });
    try {
      await client.connect();
      logger.info('db connected, now creating tables');
      logger.info('created tables, now creating indexes');
      logger.info('created indexes');
      return client;
    } catch (error) {
      logger.error('error while connecting db', error);
      return null;
    }
  },
  async disConnectDB(client) {
    try {
      await client.end();
      await client.release();
      logger.info('Db disconnected');
    } catch (err) {
      logger.error({ message: new Error(err) });
    }
  },
};
module.exports = psqlConfig;
