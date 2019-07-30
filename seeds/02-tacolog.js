
exports.seed = function (knex, Promise) {
  return knex('TacoLog').insert([
    {
      "id": 1,
      "userId": 1,
      "date": 01022,
      "tacoName": "chicken taco",
      "tacoLogPhoto": "http://unsplash.it/150/150",
      "restaurantName": "Albertos",
      "address": "123 Main St, Hesperia Ca 92345",
      "rating": 5,
      "userExperience": "Great",
      "notes": "Every day is taco ipsum tuesday. It’s taco Tuesday Monday. Yeah, apparently the taco shack was robbed. They left the money but took the tacos. TACOS!! How bout a gosh darn quesadilla? Burritos are very tasty. Tacos, tacos, tacos. Tacos, tacos, tacos. Carne asada on corn tortillas. It’s raining tacos, from out of the sky, tacos, don’t even ask why. Tacos al pastor made with adobada meat. Tacos, tacos, tacos. I’ve been following that taco truck around all day.",
      "reviewedAt": 9999-12-31

    },
    {
      "id": 2,
      "userId": 2,
      "date": 01232,
      "tacoName": "beef taco",
      "tacoLogPhoto": "http://unsplash.it/150/151",
      "restaurantName": "del taco",
      "address": "123 Main St, Apple Valley Ca 92301",
      "rating": 4,
      "userExperience": "Horrible",
      "notes": "Um, Tabasco? No thanks, do you have any Cholula? It’s raining tacos, from out of the sky, tacos, don’t even ask why. It’s a wonderful morning for breakfast tacos. Burritos are very tasty. Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.",
      "reviewedAt": 2019-12-31 
    },
    {
      "id": 3,
      "userId": 3,
      "date": 02212,
      "tacoName": "fish taco",
      "tacoLogPhoto": "http://unsplash.it/150/152",
      "restaurantName": "taco bell",
      "address": "123 Main St, Beverly Hills Ca 90210",
      "rating": 2,
      "userExperience": "so so",
      "notes": "Burritos are very tasty. Burritos are very tasty. How do you feel about hard shelled tacos? You see, the refried beans are really just the adhesive necessary to apply the soft tortilla to the hard taco shell. Pico de gallo, on the side please. I think I’ve overdosed on tacos. If you were a taco, would you eat yourself? Burritos are very tasty. I’d have to say, those tacos are on fleek. Tacos al pastor made with adobada meat.",
      "reviewedAt": 2019-11-31
    }
    ]);
};
