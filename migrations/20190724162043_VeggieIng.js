
exports.up = function(knex) {
  return knex.schema.createTable('VeggieIng', tbl => {
    tbl.increments();

    tbl
    .integer('tacoId')
    .unsigned()
    .references('id')
    .inTable('TacoLog')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    tbl
    .text('nameOfVeggie')


  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('VeggieIng');
};
