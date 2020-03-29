
exports.up = function(knex) {
    return knex.schema.createTable('funcionarios', function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('especialidade').notNullable();
        table.string('cidade').notNullable();
        table.string('ativo', 1).notNullable();
        table.string('uf',2).notNullable();
      });
};
  

exports.down = function(knex) {
    return knex.schema.droptable('funcionarios');
};
