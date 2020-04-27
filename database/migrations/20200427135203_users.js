
exports.up = function(knex) {
  return knex.schema
  .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string('username', 255).notNullable().unique();
      tbl.string('password', 255).notNullable();
      tbl.string("name", 255).notNullable();
      tbl.integer("city").notNullable()
      tbl.integer("user_rating", 5).unsigned()
      
  })
};

exports.down = function(knex) {
    return knex.schema
   .dropTableIfExists("users")
};
