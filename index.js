const getCurrentTimestamp = require('./getCurrentTimestamp')

module.exports = (arr) => {
    return Math.max(...arr);
  }