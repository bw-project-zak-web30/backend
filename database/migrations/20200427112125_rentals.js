exports.up = function(knex) {
    return knex.schema
      .createTable('rentals', tbl => {
          tbl.increments();
          tbl.date('return-date').notNullable()
          tbl.date('start-date').notNullable()
          tbl.text('details').notNullable()
          tbl.integer('user_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('users')
              .onUpdate('CASCADE')
              .onDelete('CASCADE')
        tbl.integer('renter_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('users')
              .onUpdate('CASCADE')
              .onDelete('CASCADE')
        tbl.integer('equipment_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('equipment')
              .onUpdate('CASCADE')
              .onDelete('CASCADE')
      })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('rentals');
  };
  