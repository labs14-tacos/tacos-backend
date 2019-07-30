
exports.seed = function (knex, Promise) {
  return knex('TortillaIng').insert([
    {
      "id": 1,
      "tacoId": 1,
      "nameOfTortilla": "flour",

    },
    {
      "id": 2,
      "tacoId": 2,
      "nameOfTortilla": "corn"
    },
    {
      "id": 3,
      "tacoId": 3,
      "nameOfTortilla": "flour"
    }
    ]);
};