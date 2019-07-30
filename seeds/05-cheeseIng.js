
exports.seed = function (knex, Promise) {
  return knex('CheeseIng').insert([
    {
      "id": 1,
      "tacoId": 1,
      "nameOfCheese": "cheddar",

    },
    {
      "id": 2,
      "tacoId": 2,
      "nameOfCheese": "cheese whiz"
    },
    {
      "id": 3,
      "tacoId": 3,
      "nameOfCheese": "shredded"
    }
    ]);
};
