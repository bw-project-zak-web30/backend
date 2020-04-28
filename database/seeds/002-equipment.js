exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('equipment')
      .del()
      .then(function() {
        return knex('equipment').insert([
          { owner_id: 1, name: "Sam's PC", renting: true, price: 100.00, timeframe: 2, details:"you can use my pc for a server for 2 days" },
          { owner_id: 2, name: "Bobby's printer", renting: false, price: 20.00, timeframe: 5, details:"I'll drop this printer off anywhere in my city" },
          { owner_id: 1, name: "Sam's Scanner", renting: true, price: 30.00, timeframe: 7, details:"you can use my scanner for 7 days" },
          { owner_id: 2, name: "Bobby's Speakers", renting: true, price: 10.00, timeframe: 3, details:"you can use my speakers for 3 days" },
          { owner_id: 3, name: "Hstern's scanner", renting: false, price: 100.00, timeframe: 7, details:"you can use my scanner for 7 days" },
        ]);
      });
  };