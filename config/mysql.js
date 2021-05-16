const mysql = require('mysql');
const { logger } = require('../utils/logger');

const mysqlConfig = {
  async connect(user, host, database, password, port) {
    const client = mysql.createConnection({
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
module.exports = mysqlConfig;
