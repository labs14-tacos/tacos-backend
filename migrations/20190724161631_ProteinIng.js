
exports.up = function(knex) {
  return knex.schema.createTable('ProteinIng', tbl => {
    tbl.increments();

    tbl
    .integer('tacoId')
    .unsigned()
    .references('id')
    .inTable('TacoLog')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    tbl
    .text('nameOfProtein')


  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ProteinIng');
};
