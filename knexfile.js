// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'truman',
      user: 'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'pg',
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
    }
  },

  production: {
    client: 'pg',
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
    }
  }

};


/**
 * Entidades:
 * 
 * ONG, CASOS (incidents)
 * 
 */

 /*
 * Funcionalidades:
 *
 * Login de ONG
 * Cadastro de ONG
 * Logout de ONG
 * Cadastrar novos casos
 * Deletar novos casos
 * Listar casos específicos de uma ONG
 * Entrar em contato com a ONG
 */