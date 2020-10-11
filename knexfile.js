const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

module.exports = {

  development: {
    client: process.env.DB_CONNECTION,
    connection: {
      filename: path.join('database', process.env.DB_NAME + '.sqlite')
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: 'database/migrations'
    },
    seeds: {
      directory: 'database/seeds'
    }
  },

  staging: {
    client: process.env.DB_CONNECTION,
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'database/migrations'
    },
    seeds: {
      directory: 'database/seeds'
    }
  },

  production: {
    client: process.env.DB_CONNECTION,
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'database/migrations'
    },
    seeds: {
      directory: 'database/seeds'
    }
  }

};
