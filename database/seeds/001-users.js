exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('users')
      .del()
      .then(function() {
        return knex('users').insert([
          { username: "sam1", password: "test", city: "DC", name: "sam" },
          { username: "bobby2", password: "test", city: "Atlanta", name: "bobby" },
          { username: "Hstern", password: "test", city: "New York", name: "Howard" },
        ]);
      });
  };
  