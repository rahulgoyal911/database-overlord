const { Client } = require('pg');
const { logger } = require('../utils/logger');

const psqlConfig = {
  async connect(user, host, database, password, port) {
    try {
      const client = new Client({
        user, host, database, password, port,
      });
      await client.connect();
      logger.info('Connected to psql');
      return client;
    } catch (err) {
      logger.error({ message: new Error(err) });
      return null;
    }
  },
  async disconnect(client) {
    try {
      if (client == null) return;
      await client.end();
      await client.release();
      logger.info('Disconnected to psql');
    } catch (err) {
      logger.error({ message: new Error(err) });
    }
  },
};
module.exports = psqlConfig;
