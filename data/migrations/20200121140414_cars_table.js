
// does this need to be moved over?
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
      // VIN 543256GGRT string
      // make saturn string
      // model ion string
      // milage 70000 int
  
      tbl.increments();
      tbl.string('VIN', 100).notNullable().index();
      tbl.string('make', 50).notNullable().index()
      tbl.string('model', 50).notNullable().index()
      tbl.integer('milage').notNullable()
      tbl.string('transmission type', 50)
      tbl.string('status', 50)
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
  };
  