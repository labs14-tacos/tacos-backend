exports.seed = function (knex, Promise) {
  return knex('Users').insert([
    {
      "id": 1,
      "firebaseId": "ThisIsAFakeFirebaseId",
      "firstName": "Jamie",
      "lastName": "Jamison",
      "email": "jamietheman@hotmail.com"
    },
    {
      "id": 2,
      "firebaseId": "ThisIsAlsoAFakeFirebaseId",
      "firstName": "Samantha",
      "lastName": "Sampson",
      "email": "samsam@ymail.com"
    },
    {
      "id": 3,
      "firebaseId": "ThisIsAnotherAFakeFirebaseId",
      "firstName": "Robby",
      "lastName": "Robertson",
      "email": "computers@computers.com"
    }
  ]);
};