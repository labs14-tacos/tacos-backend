exports.up = function(knex) {
  return knex.schema.createTable('Users', tbl => {
    tbl.increments();

    tbl
      .string('firebaseId')
      .notNullable()
      .unique();

    tbl
      .string('firstName', 255);
   
    tbl
      .string('lastName', 255);
      
    tbl
      .string('email', 255);

    tbl
      .string('userPhoto');

    tbl
      .string('location');
    
    tbl
      .string('zipcode');

    tbl
      .integer('tacosPerMonth');

    tbl
      .text('hardOrSoft');

    tbl
      .text('cornOrFlour'); 

    tbl
      .integer('heatPreference');

    tbl
      .text('streetOrGourmet');

    tbl
      .text('favTaco');

    tbl
      .text('favTacoLocation');

    tbl
      .text('bestTacoMemory');

    tbl
      .text('instaHandle');

    tbl
      .text('twitterHandle');

    tbl
      .text('facebookPage');

    tbl
      .text('website');
      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Users');
};

// only the firebaseId and email fields are not-nullable because they are created when the firebase user object is created.