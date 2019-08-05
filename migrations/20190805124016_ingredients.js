
exports.up = function(knex) {
  return knex.schema.createTable('Ingredients', tbl => {
    tbl.increments();

    tbl
    .integer('tacoId')
    .unsigned()
    .references('id')
    .inTable('TacoLog')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    tbl
    .json('ingredients') // this is a JSON object with the ingredient types with an array for each ingredient key -- for example { cheese: ["Cheddar", "Pepperjack"], vegetables: ["bell peppers", "tomatoes", "onions"]} 

  } )
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Ingredients');
};
