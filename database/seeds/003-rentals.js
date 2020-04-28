exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('rentals')
      .del()
      .then(function() {
        return knex('rentals').insert([
          { owner_id: 1, renter_id: 2, equipment_id: 2, return_date:  '2020-10-10', start_date: '2020-10-8', details:"Rental is only for two days."},
          { owner_id: 2, renter_id: 1, equipment_id: 1, return_date:  '2020-10-10', start_date: '2020-10-8', details:"Please don't break"},
          { owner_id: 2, renter_id: 1, equipment_id: 3, return_date:  '2020-10-10', start_date: '2020-10-8', details:"Don't use outside"},
        ]);
      });
  };