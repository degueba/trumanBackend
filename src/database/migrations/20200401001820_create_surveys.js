
exports.up = function(knex) {
    return knex.schema.createTable('surveys', function(table){
        table.increments();
        table.string('question_1').notNullable();
        table.string('question_2').notNullable();
        table.string('question_3').notNullable();
        table.string('question_4').notNullable();
        table.string('question_5').notNullable();
        
        table.integer('id_avenger').notNullable();
        table.integer('id_user').notNullable();

        table.foreign('id_avenger').references('id').inTable('avengers');
        table.foreign('id_user').references('id').inTable('users');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('surveys')
};
