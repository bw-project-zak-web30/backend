exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('equipment')
      .del()
      .then(function() {
        return knex('equipment').insert([
          { owner_id: 1, name: "lawn mower", renting: false, price: 20.00, timeframe: 5, details:"testing" },
        ]);
      });
  };