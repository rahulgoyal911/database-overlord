require('dotenv').config();
const dbConfig = require('./config/db');

dbConfig.mongo.connect(process.env.mongo_uri);
