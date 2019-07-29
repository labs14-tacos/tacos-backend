
exports.seed = function (knex, Promise) {
  return knex('tortillaIng').insert([
    {
      "id": 1,
      "tacoId": 1,
      "nameOfTortilla": "flower",

    },
    {
      "id": 2,
      "tacoId": 2,
      "nameOfTortilla": "corn"
    },
    {
      "id": 3,
      "tacoId": 3,
      "nameOfTortilla": "flower"
    }
    ]);
};