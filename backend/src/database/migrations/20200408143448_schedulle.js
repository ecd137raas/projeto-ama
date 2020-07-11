
exports.up = function(knex) {
    return knex.schema.createTable('schedulle', function (table) {
        table.increments();
        table.integer('id_employee').notNullable();
        table.integer('id_patients').notNullable();
        table.string('day_schedulle').notNullable();
        table.string('hr_schedulle').notNullable();
        table.date('date').notNullable();
        table.integer('active', 1).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.droptable('schedulle');
};
