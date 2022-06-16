const { Pool } = require('pg');

const config = {};

const pool = new Pool(config);

module.exports = {
  originalClient: pool,

  async Query(...params) {
    console.log(...params);
    return this.originalClient.query(...params);
  },
};
