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

    tbl
      .timestamp('timestampFinish')

    tbl
      .timestamp('createdAt')
      .defaultTo(knex.fn.now())

    tbl
      .text('address');

    tbl
      .boolean('private')
      .defaultTo(true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Events');
};
