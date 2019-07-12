exports.up = function(knex) {
  return knex.schema.createTable('Users', tbl => {
    tbl.increments();

    tbl
      .string('firebaseId')
      .notNullable()
      .unique();

    tbl
      .string('firstName', 255)

    tbl
      .string('lastName', 255)

    tbl
      .string('email', 255)
      .notNullable()
      .unique();

    tbl
      .string('userPhoto');

      // add in birthDate

    // tbl
    //   .string('status', 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Users');
};
