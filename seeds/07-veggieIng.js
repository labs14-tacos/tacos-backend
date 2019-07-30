
exports.seed = function (knex, Promise) {
  return knex('veggieIng').insert([
    {
      "id": 1,
      "tacoId": 1,
      "nameOfVeggie": "corn",

    },
    {
      "id": 2,
      "tacoId": 2,
      "nameOfVeggie": "lettuce"
    },
    {
      "id": 3,
      "tacoId": 3,
      "nameOfVeggie": "tomato"
    }
    ]);
};
