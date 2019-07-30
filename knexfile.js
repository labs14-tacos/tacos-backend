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
      database: process.env.DATABASE_URL
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
<<<<<<< HEAD
    ssl: true,
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
=======
    connection: process.env.DATABASE_URL,
>>>>>>> eab67fac16eba7bf6c02fc7ee189c01b843d8060
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
    }, 
    ssl: true
  }, 

};
