
exports.seed = function (knex, Promise) {
  return knex('proteinIng').insert([
    {
      "id": 1,
      "tacoId": 1,
      "nameOfProtein": "chicken",

    },
    {
      "id": 2,
      "tacoId": 2,
      "nameOfProtein": "fish"
    },
    {
      "id": 3,
      "tacoId": 3,
      "nameOfProtein": "pork"
    }
    ]);
};
