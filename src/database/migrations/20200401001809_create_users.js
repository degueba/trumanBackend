
exports.up = function(knex) {
    return Promise.all([
        knex.schema.createTable('users', function(table){
          table.increments();
      
          table.string('name').notNullable();
          table.string('email').notNullable();
          table.string('password').notNullable();
          table.boolean('subscription').notNullable().defaultTo(false);
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.timestamp('updated_at').defaultTo(knex.fn.now());
        }).then(function(){
            return knex('users').insert(
                {"name": "truman","email": "truman@admin.com","password": "truman"}
            );
        })
    ]);
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users')
  };
  