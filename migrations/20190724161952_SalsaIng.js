
exports.up = function(knex) {
  return knex.schema.createTable('SalsaIng', tbl => {
    tbl.increments();

    tbl
    .integer('tacoId')
    .unsigned()
    .references('id')
    .inTable('TacoLog')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    tbl
    .text('nameOfSalsa')


  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('SalsaIng');
};
