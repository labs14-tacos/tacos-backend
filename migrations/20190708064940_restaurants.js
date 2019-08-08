
exports.up = function(knex) {
    return knex.schema.createTable('Restaurants', tbl => {
        tbl.increments();
        
        tbl.string('restaurantName')

        tbl.string('address')

        tbl.string('zipcode')

        tbl.string('latitude')

        tbl.string('longitude')

    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Restaurants');
};
