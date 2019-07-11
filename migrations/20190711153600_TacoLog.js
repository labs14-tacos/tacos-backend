exports.up = function(knex) {
  return knex.schema.createTable('TacoLog', tbl => {
    tbl.increments();

  tbl
    .integer('userId')
    .unsigned()
    .references('id')
    .inTable('Users');

  tbl
    .string('typeOfTaco', 255)
    .notNullable();

  tbl
    .string('tacoLogPhoto');

  tbl
    .string('restaurantName', 255)
    .notNullable();
  
  tbl
    .integer('rating')
    .notNullable();
  
  tbl
    .text('notes')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('TacoLog');
};
