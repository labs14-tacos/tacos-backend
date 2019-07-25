
exports.seed = function (knex, Promise) {
  return knex('salsaIng').insert([
    {
      "id": 1,
      "tacoId": 1,
      "nameOfSalsa": "paste pacante",

    },
    {
      "id": 2,
      "tacoId": 2,
      "nameOfSalsa": "paul newman salsa"
    },
    {
      "id": 3,
      "tacoId": 3,
      "nameOfSalsa": "pico de gallo"
    }
    ]);
};
