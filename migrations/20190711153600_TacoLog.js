exports.up = function(knex) {
  return knex.schema.createTable('TacoLog', tbl => {
    tbl.increments();

  tbl
    .string('firebaseId')
    .references('firebaseId')
    .inTable('Users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  tbl
    .string('tacoLogPhoto');

  tbl
    .integer('restaurantId')
    .unsigned()
    .references('id')
    .inTable('Restaurants')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  
  tbl
    .integer('rating')
    .notNullable();
  
  tbl
    .text('notes')

  tbl
    .timestamp('date').defaultTo(knex.fn.now())

  tbl
    .json('ratings') // this is for storing a JSON object with the 5 separate ratings on it like: { "t": 5, "a": 4.5, "c": 4, "o": 4.5, "total": 4.5} 

  tbl
    .timestamp('reviewedAt').defaultTo(knex.fn.now())


  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('TacoLog');
};
