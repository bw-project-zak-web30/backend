module.exports = {
    development: {
      client: "sqlite3",
      connection: {
        filename: "./database/techstuff.db3",
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./database/migrations",
      },
      seeds: {
        directory: "./database/seeds",
      },
    },
    testing: {
      client: "sqlite3",
      connection: {
        filename: "./database/test.db3",
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./database/migrations",
      },
      seeds: {
        directory: "./database/seeds",
      },
    },
    //code we've added to conect to Heroku app
    //Heroku will look for 'production configuration
    production: {
      client: 'pg', //npm i pg
      connection: process.env.DATABASE_URL, // provided by Heroku
      ssl: true,
      migrations: {
        directory: "./database/migrations",
      },
      seeds: {
        directory: "./database/seeds",
      },
    }
  };
  