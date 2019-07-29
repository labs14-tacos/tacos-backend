// const db = require('../data/dbConfig');

// const TacoLogs = require('../data/models/tacolog-model');

// describe('TacoLog Model', () => {

//     beforeEach(async () => {
//         await db('TacoLog')
//         .truncate();
//     })


//     describe('add()' , () => {

//         it('will add a tacolog to the db', async () => {

//             const tacolog = {
//                 date: 1999-12-31,
//                 tacoName: "bat taco",
//                 tacoLogPhoto: "http://unsplash.it/150/150",
//                 restaurantName: "La Grange",
//                 address: "678 West Green Street",
//                 rating: 3,
//                 userExperience: "Superb",
//                 notes: "Every day is taco ipsum tuesday. It’s taco Tuesday Monday. Yeah, apparently the taco shack was robbed. They left the money but took the tacos. TACOS!! How bout a gosh darn quesadilla? Burritos are very tasty. Tacos, tacos, tacos. Tacos, tacos, tacos.",
//                 reviewedAt: Date.now()
//             }

//             await TacoLogs.add(tacolog)
//             const taco = await db('TacoLog')
//             expect(taco).toHaveLength(1)

//         })  
//     })




    
// })