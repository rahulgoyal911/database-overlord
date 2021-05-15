const { MongoClient } = require('mongodb');
const { logger } = require('../utils/logger');

const mongoConfig = {
  async connect(uri) {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db('admin').command({ ping: 1 });
      logger.info('Connected to mongodb uri');
      return client;
    } catch (err) {
      logger.error({ message: new Error(err) });
      return null;
    }
  },
  async disConnectDB(client) {
    try {
      await client.close();
      logger.info('Db disconnected');
    } catch (err) {
      logger.error({ message: new Error(err) });
    }
  },
};
module.exports = mongoConfig;
