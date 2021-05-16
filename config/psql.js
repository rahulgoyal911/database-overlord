const { Client } = require('pg');
const { logger } = require('../utils/logger');

const psqlConfig = {
  async connect(user, host, database, password, port) {
    const client = new Client({
      user, host, database, password, port,
    });
    try {
      await client.connect();
      logger.info('db connected');
      return client;
    } catch (error) {
      logger.error('error while connecting db', error);
      return null;
    }
  },
  async disconnect(client) {
    try {
      if (client == null) return;
      await client.end();
      await client.release();
      logger.info('Db disconnected');
    } catch (err) {
      logger.error({ message: new Error(err) });
    }
  },
};
module.exports = psqlConfig;
