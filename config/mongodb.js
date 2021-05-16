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
      logger.info('Connected to mongodb');
      return client;
    } catch (err) {
      logger.error({ message: new Error(err) });
      return null;
    }
  },
  async disconnect(client) {
    try {
      if (client == null) return;
      await client.close();
      logger.info('Disconnected to mongodb');
    } catch (err) {
      logger.error({ message: new Error(err) });
    }
  },
};
module.exports = mongoConfig;
