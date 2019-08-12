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
    .string('tacoLogPhoto').defaultTo('https://images.unsplash.com/photo-1512838154171-97c4fa39f33b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')

  tbl 
    .string('restaurantName')

  // tbl 
  //   .integer('numberOfTacos')
  
  tbl.json('ingredients');
  
  tbl 
    .string('nameOfTaco')

  tbl 
    .integer('rating');

  tbl
    .integer('t_rating');
  
  tbl
    .integer('a_rating');
  
  tbl
    .integer('c_rating');
  
  tbl
    .integer('o_rating');
  
  // tbl
  //   .integer('restaurantId')
  //   .unsigned()
  //   .references('id')
  //   .inTable('Restaurants')
  //   .onDelete('CASCADE')
  //   .onUpdate('CASCADE');
  
  tbl
    .text('notes')
    .notNullable() 

  tbl
    .timestamp('date').defaultTo(knex.fn.now())

  // tbl
  //   .json('ratings') // this is for storing a JSON object with the 5 separate ratings on it like: { "t": 5, "a": 4.5, "c": 4, "o": 4.5, "total": 4.5} 

  tbl
    .timestamp('reviewedAt').defaultTo(knex.fn.now())


  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('TacoLog');
};
