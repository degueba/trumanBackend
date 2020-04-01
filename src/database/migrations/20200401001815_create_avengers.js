
exports.up = function(knex) {
    return Promise.all([
      knex.schema.createTable('avengers', function(table) {
        table.increments();
        
        table.enum('name', ['Iron Man', 'Spiderman', 'Black Widow'])
      }).then(function(){
        return knex('avengers').insert([{"name":"Iron Man"},{"name":"Spiderman"},{"name": "Black Widow"}])
      })
    ]);
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('avengers')
  };
  