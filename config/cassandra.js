const cassandra = require('cassandra-driver');
const { logger } = require('../utils/logger');

const cassandraConfig = {
  async connect(hosts, datacenter, username, password) {
    try {
      const client = new cassandra.Client({
        contactPoints: hosts,
        localDataCenter: datacenter,
        authProvider: new cassandra.auth
          .PlainTextAuthProvider(username, password),
      });
      await client.connect();
      logger.info('Connected to cassandra');
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
      logger.info('Disconnected to cassandra');
    } catch (err) {
      logger.error({ message: new Error(err) });
    }
  },
};
module.exports = cassandraConfig;
