
exports.up = function(knex) {
  return knex.schema.createTable('TortillaIng', tbl => {
    tbl.increments();

    tbl
    .integer('tacoId')
    .unsigned()
    .references('id')
    .inTable('TacoLog')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    tbl
    .text('nameOfTortilla')


});
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('TortillaIng');
};
