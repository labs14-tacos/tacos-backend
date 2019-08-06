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
    .json('ingredients') // this is a JSON object with the ingredient types with an array for each ingredient key -- for example { cheese: ["Cheddar", "Pepperjack"], vegetables: ["bell peppers", "tomatoes", "onions"]} 

  tbl
    .json('ratings') // this is for storing a JSON object with the 5 separate ratings on it like: { "t": 5, "a": 4.5, "c": 4, "o": 4.5, "total": 4.5} 

  tbl
    .timestamp('reviewedAt').defaultTo(knex.fn.now())


  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('TacoLog');
};
