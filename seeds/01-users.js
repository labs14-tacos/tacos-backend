exports.seed = function (knex, Promise) {
  return knex('Users').insert([
    {
      "id": 1,
      "firebaseId": "ThisIsAFakeFirebaseId1",
      "firstName": "Jamie",
      "lastName": "Jamison",
      "email": "jamietheman@hotmail.com",
      "userPhoto": "http://unsplash.it/100/100",
      "zipCode": 92392,
      "tacosPerMonth": 5,
      "hardOrSoft": "soft",
      "cornOrFlour": "flour",
      "heatPreference": 5,
      "streetOrGourmet": "street",
      "favTaco": "chicken",
      "favTacoLocation": "Los Cuscos",
      "bestTacoMemory": "homemade tacos",
      "instaHandle": "Instagram goes here",
      "twitterHandle": "twitter goes here",
      "facebookPage": "facebook page goes here",
      "website": "espn.com"
    },
    {
      "id": 2,
      "firebaseId": "ThisIsAlsoAFakeFirebaseId2",
      "firstName": "Samantha",
      "lastName": "Sampson",
      "email": "samsam@ymail.com",
      "userPhoto": "http://unsplash.it/100/101",
      "zipCode": 92393,
      "tacosPerMonth": 3,
      "hardOrSoft": "hard",
      "cornOrFlour": "corn",
      "heatPreference": 6,
      "streetOrGourmet": "gourmet",
      "favTaco": "beef",
      "favTacoLocation": "del taco",
      "bestTacoMemory": "hot tacos",
      "instaHandle": "Instagram goes here",
      "twitterHandle": "twitter goes here",
      "facebookPage": "facebook page goes here",
      "website": "espn.com"
    },
    {
      "id": 3,
      "firebaseId": "ThisIsAnotherAFakeFirebaseId3",
      "firstName": "Robby",
      "lastName": "Robertson",
      "email": "computers@computers.com",
      "userPhoto": "http://unsplash.it/100/102",
      "zipCode": 92394,
      "tacosPerMonth": 2,
      "hardOrSoft": "soft",
      "cornOrFlour": "flour",
      "heatPreference": 1,
      "streetOrGourmet": "street",
      "favTaco": "chicken",
      "favTacoLocation": "Los Cuscos",
      "bestTacoMemory": "any tacos",
      "instaHandle": "Instagram goes here",
      "twitterHandle": "twitter goes here",
      "facebookPage": "facebook page goes here",
      "website": "espn.com"
    }
  ]);
};