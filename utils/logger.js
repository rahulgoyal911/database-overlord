/* eslint-disable no-param-reassign */
const { createLogger, format, transports } = require('winston');
require('dotenv').config();

const { timestamp, prettyPrint, errors } = format;

const logger = createLogger({
  format: format.combine(
    errors({ stack: true }),
    format.colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    prettyPrint(),
    format.printf((info) => `${Object.keys(info).reverse().reduce((acc, key, i) => {
      if (typeof key === 'string') {
        if (i > 0) acc += ',\n';
        acc += `   "${key}": "${info[key]}"`;
      }
      return acc;
    }, '{\n')}\n}`),
  ),
  transports: [new transports.Console(), new transports.File({ filename: 'service.log' })],
  exitOnError: false,
  defaultMeta: {
    environment: process.env.enviornment,
    service_name: process.env.service_name,
    port: process.env.port,
  },
});

module.exports.logger = logger;
