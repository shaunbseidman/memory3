// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/memory3'
  },

  production: {
    client: 'pg',
    connection:process.env.DATABASE_URL  + '?ssl=true'
  }

};
