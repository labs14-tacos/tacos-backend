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

   tbl 
     .integer('numberOfTacos')
  
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
  
  
  tbl
    .text('notes')
    .notNullable() 

  tbl
    .timestamp('date').defaultTo(knex.fn.now())

 
  tbl
    .timestamp('reviewedAt').defaultTo(knex.fn.now())


  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('TacoLog');
};
