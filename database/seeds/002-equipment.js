exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('equipment')
      .del()
      .then(function() {
        return knex('equipment').insert([
          { owner_id: 1, name: "Sam's PC", renting: false, price: 100.00, timeframe: 2, details:"you can use my pc for a server for 2 days" },
          { owner_id: 2, name: "Bobby's printer", renting: false, price: 20.00, timeframe: 5, details:"I'll drop this printer off anywhere in my city" },
        ]);
      });
  };