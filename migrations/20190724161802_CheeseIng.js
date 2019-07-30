
exports.up = function(knex) {
  return knex.schema.createTable('CheeseIng', tbl => {
    tbl.increments();

    tbl
    .integer('tacoId')
    .unsigned()
    .references('id')
    .inTable('TacoLog')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    tbl
    .text('nameOfCheese')


  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('CheeseIng');
};