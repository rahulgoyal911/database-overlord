const mysql = require('mysql');
const { logger } = require('../utils/logger');

const mysqlConfig = {
  async connect(user, host, database, password, port) {
    const client = mysql.createConnection({
      user, host, database, password, port,
    });
    try {
      await client.connect();
      logger.info('Connected to mysql');
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
      logger.info('Disconnected to mysql');
    } catch (err) {
      logger.error({ message: new Error(err) });
    }
  },
};
module.exports = mysqlConfig;
