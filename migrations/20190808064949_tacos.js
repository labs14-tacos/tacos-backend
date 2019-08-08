
exports.up = function(knex) {
    return knex.schema.createTable('Tacos', tbl => {
        tbl.increments();

        tbl.json('ingredients'); // this is a JSON object with the ingredient types with an array for each ingredient key -- for example { cheese: ["Cheddar", "Pepperjack"], vegetables: ["bell peppers", "tomatoes", "onions"]} 

        tbl.integer('rating');

        tbl.integer('tacologId')
        .unsigned()
        .references('id')
        .inTable('Tacolog')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

        tbl.string('notes')

    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Tacos');
};
