const { log } = require('../modules/logger');

const info = (msg, data) => {
  log('INFO', msg, data);
};

const warn = (msg, data) => {
  log('WARN', msg, data);
};

const debug = (msg, data) => {
  log('DEBUG', msg, data);
};

module.exports = { info, warn, debug };
