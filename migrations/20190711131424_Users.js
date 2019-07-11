exports.up = function(knex) {
  return knex.schema.creteTable('Users', tbl => {
    tbl.increments();

    tbl
      .integer('firebaseId')
      .notNullable()
      .unique();

    tbl
      .string('firstName', 255)
      .notNullable();

    tbl
      .string('lastName', 255)
      .notNullable();

    tbl
      .string('email', 255)
      .notNullable()
      .unique();

    tbl
      .string('userPhoto');

    tbl
      .integer('birthDate');

    tbl
      .string('status', 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Users');
};
