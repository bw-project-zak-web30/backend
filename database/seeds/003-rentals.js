exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('equipment')
      .del()
      .then(function() {
        return knex('equipment').insert([
          { user_id: 1, renter_id: 2, equipment_id: 2, return_date:  2020-10-10, start_date: 2020-10-8, details:"Rental is only for two days."},
        ]);
      });
  };