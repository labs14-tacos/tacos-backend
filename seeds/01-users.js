exports.seed = function (knex, Promise) {
  return knex('Users').insert([
    {
      "id": 1,
      "firebaseId": "ThisIsAFakeFirebaseId1",
      "firstName": "Jamie",
      "lastName": "Jamison",
      "email": "jamietheman@hotmail.com",
      "userPhoto": "http://unsplash.it/100/100",
      // "zipCode": 92392,
      // "tacosPerMonth": 5,
      // "hardOrSoft": "soft",
      // "cornOrFlour": "flour",
      // "heatPreference": 5,
      // "streetOrGourmet": "street",
      "favTaco": "chicken",
      // "favTacoLocation": "Los Cuscos",
      // "bestTacoMemory": "homemade tacos",
      "instaHandle": "Instagram goes here",
      "twitterHandle": "twitter goes here",
      "facebookPage": "facebook page goes here",
      "website": "espn.com"
    },
    {
      "id": 2,
      "firebaseId": "ThisIsAFakeFirebaseId2",
      "firstName": "Jamie",
      "lastName": "Jamison",
      "email": "jamietheman2@hotmail.com",
      "userPhoto": "http://unsplash.it/100/100",
      // "zipCode": 92392,
      // "tacosPerMonth": 5,
      // "hardOrSoft": "soft",
      // "cornOrFlour": "flour",
      // "heatPreference": 5,
      // "streetOrGourmet": "street",
      "favTaco": "chicken",
      // "favTacoLocation": "Los Cuscos",
      // "bestTacoMemory": "homemade tacos",
      "instaHandle": "Instagram goes here",
      "twitterHandle": "twitter goes here",
      "facebookPage": "facebook page goes here",
      "website": "espn.com"
    },
    {
      "id": 3,
      "firebaseId": "ThisIsAFakeFirebaseId3",
      "firstName": "Jamie",
      "lastName": "Jamison",
      "email": "jamietheman3@hotmail.com",
      "userPhoto": "http://unsplash.it/100/100",
      // "zipCode": 92392,
      // "tacosPerMonth": 5,
      // "hardOrSoft": "soft",
      // "cornOrFlour": "flour",
      // "heatPreference": 5,
      // "streetOrGourmet": "street",
      "favTaco": "chicken",
      // "favTacoLocation": "Los Cuscos",
      // "bestTacoMemory": "homemade tacos",
      "instaHandle": "Instagram goes here",
      "twitterHandle": "twitter goes here",
      "facebookPage": "facebook page goes here",
      "website": "espn.com"
    }
  ]);
};