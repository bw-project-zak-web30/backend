exports.up = function(knex) {
    return knex.schema
      .createTable('equipment', tbl => {
          tbl.increments();
          tbl.text('name').notNullable()
          tbl.decimal('price').notNullable()
          tbl.integer('timeframe').notNullable()
          tbl.text('details')
          tbl.integer('owner_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('users')
              .onUpdate('CASCADE')
              .onDelete('CASCADE')
          tbl.boolean('renting').defaultTo(false)
      })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('equipment');
  };
  