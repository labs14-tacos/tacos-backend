exports.up = function(knex) {
  return knex.schema.createTable('Events', tbl => {
    tbl.increments()

    tbl
      .integer('adminId')
      .unsigned()
      .references('id')
      .inTable('Users');

    tbl
      .string('locationName', 255);

    tbl
      .string('eventPhoto');

    tbl
      .timestamp('timestampStart')
      .notNullable();

    tbl
      .timestamp('timestampFinish')
      .notNullable();

    tbl
      .timestamp('createdAt')
      .notNullable();

    tbl
      .text('address');

    tbl
      .boolean('private')
      .defaultsTo(true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Events');
};
