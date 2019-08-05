
exports.seed = function(knex) {
  return knex('Ingredients').insert([
    {
      "tacoId": 1,
      "ingredients": {"cheese": ["monterrey jack", "pepperjack", "queso blanco"], "protein": [ "chicken", "pinto beans"], "salsa": ["salsa verde"], "vegetables": ["onion", "tomato", "cilantro"], "tortilla": ["corn"]}
    },
    {
      "tacoId": 2,
      "ingredients": {"cheese": ["pepperjack", "queso blanco"], "protein": ["beef", "black beans"], "salsa": ["salsa verde"], "vegetables": ["onion", "tomato", "cilantro", "rice"], "tortilla": ["corn"]}
    },
    {
      "tacoId": 3,
      "ingredients": {"protein": ["black beans", "fish"], "salsa": ["salsa verde"], "vegetables": ["onion", "tomato", "cilantro", "rice"], "tortilla": ["flour"]}
    }
    ]);
};
