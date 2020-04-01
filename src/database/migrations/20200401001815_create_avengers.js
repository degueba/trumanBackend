
exports.up = function(knex) {
    return knex.schema.createTable('avengers', function(table) {
      table.increments();
      
      table.enum('name', ['Iron Man', 'Spiderman', 'Black Widow'])
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('avengers')
  };
  