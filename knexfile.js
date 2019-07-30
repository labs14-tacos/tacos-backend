// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/tacos.sqlite3'
    },
    useNullAsDefault: true,
    seeds: {
      directory: './seeds',
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds',
    }
  },

  production: {
    client: 'postgresql',
    ssl: true,
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds',
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',

    },

    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds',
    }
  }, 

};
