
exports.seed = function (knex, Promise) {
  return knex('TacoLog').insert([
    {
      "id": 1,
      "firebaseId": "1",
      // "restaurantId": 1,
      // "tacoName": "chicken taco",
      "tacoLogPhoto": "http://unsplash.it/150/150",
      "restaurantName": "Albertos",
      // "numberOfTacos": 3,
      "nameOfTaco": "Fish",
      "ingredients": { "cheese": ["Cheddar", "Pepperjack"],
                       "vegetables": ["bell peppers", "tomatoes", "onions"]},
      // "address": "123 Main St, Hesperia Ca 92345",
      // "ratings": {
      //   "t": 5,
      //   "a": 3,
      //   "c": 5,
      //   "o": 4,
      //   "total": 4
      //  },
      // "userExperience": "Great",
      "rating": 4,
      "notes": "Every day is taco ipsum tuesday. It’s taco Tuesday Monday. Yeah, apparently the taco shack was robbed. They left the money but took the tacos. TACOS!! How bout a gosh darn quesadilla? Burritos are very tasty. Tacos, tacos, tacos. Tacos, tacos, tacos. Carne asada on corn tortillas. It’s raining tacos, from out of the sky, tacos, don’t even ask why. Tacos al pastor made with adobada meat. Tacos, tacos, tacos. I’ve been following that taco truck around all day."
    },
    {
      "id": 2,
      "firebaseId": "2",
      // "restaurantId": 1,
      // "tacoName": "chicken taco",
      "tacoLogPhoto": "http://unsplash.it/150/150",
      "restaurantName": "Albertos",
      // "numberOfTacos": 3,
      "nameOfTaco": "Fish",
      "ingredients": { "cheese": ["Cheddar", "Pepperjack"],
                       "vegetables": ["bell peppers", "tomatoes", "onions"]},
      // "address": "123 Main St, Hesperia Ca 92345",
      // "ratings": {
      //   "t": 5,
      //   "a": 3,
      //   "c": 5,
      //   "o": 4,
      //   "total": 4
      //  },
      // "userExperience": "Great",
      "rating": 4,
      "notes": "Every day is taco ipsum tuesday. It’s taco Tuesday Monday. Yeah, apparently the taco shack was robbed. They left the money but took the tacos. TACOS!! How bout a gosh darn quesadilla? Burritos are very tasty. Tacos, tacos, tacos. Tacos, tacos, tacos. Carne asada on corn tortillas. It’s raining tacos, from out of the sky, tacos, don’t even ask why. Tacos al pastor made with adobada meat. Tacos, tacos, tacos. I’ve been following that taco truck around all day."
    },
    {
      "id": 3,
      "firebaseId": "3",
      // "restaurantId": 1,
      // "tacoName": "chicken taco",
      "tacoLogPhoto": "http://unsplash.it/150/150",
      "restaurantName": "Albertos",
      // "numberOfTacos": 3,
      "nameOfTaco": "Fish",
      "ingredients": { "cheese": ["Cheddar", "Pepperjack"],
                       "vegetables": ["bell peppers", "tomatoes", "onions"]},
      // "address": "123 Main St, Hesperia Ca 92345",
      // "ratings": {
      //   "t": 5,
      //   "a": 3,
      //   "c": 5,
      //   "o": 4,
      //   "total": 4
      //  },
      // "userExperience": "Great",
      "rating": 4,
      "notes": "Every day is taco ipsum tuesday. It’s taco Tuesday Monday. Yeah, apparently the taco shack was robbed. They left the money but took the tacos. TACOS!! How bout a gosh darn quesadilla? Burritos are very tasty. Tacos, tacos, tacos. Tacos, tacos, tacos. Carne asada on corn tortillas. It’s raining tacos, from out of the sky, tacos, don’t even ask why. Tacos al pastor made with adobada meat. Tacos, tacos, tacos. I’ve been following that taco truck around all day."
    }
    ]);
};
