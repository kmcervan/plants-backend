require('dotenv').config();

const pgConnection = process.env.DATABASE_URL || 'postgres@localhost/auth';

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      filename: './data/auth.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  }

};