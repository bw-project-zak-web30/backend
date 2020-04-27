exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('users')
      .truncate()
      .then(function() {
        return knex('users').insert([
          { username: "test1", password: "test" },
          { username: "test2", password: "test" },
          { username: "test3", password: "test" },
        ]);
      });
  };
  