exports.up = function(knex) {
  return knex.schema.createTable('TacoLog', tbl => {
    tbl.increments();

  tbl
    .integer('userId')
    .unsigned()
    .references('id')
    .inTable('Users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  tbl
    .string('typeOfTaco', 255);

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

  tbl
    .timestamp('date').defaultTo(knex.fn.now())

  tbl
    .text('tacoName')

  tbl
    .text('address')

  tbl
    .text('userExperience')


  tbl
    .timestamp('reviewedAt').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('TacoLog');
};
