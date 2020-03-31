
exports.up = function(knex) {
    return knex.schema.createTable('employee', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('specialty').notNullable();
        table.string('city').notNullable();
        table.string('active', 1).notNullable();
        table.string('therapist', 1).notNullable();
        table.string('uf',2).notNullable();
      });
  
};

exports.down = function(knex) {
    return knex.schema.droptable('employee');
};
