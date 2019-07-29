const db = require('../data/dbConfig');

const TacoLog = require('../data/models/tacolog-model');

const {log1, log2, log3} = require('./helper.js');


beforeEach(async () => {
    await db('TacoLog')
    .del()
})

describe("Users Model", () => {
  
    describe("Add a new TacoLog", () => {

        // checks to confirm there are no users
        it('should insert a new TacoLog', async () => {
            let doesUserExist = await db('TacoLog')
                    .where({restaurantName: "Albertson"})
                    expect(doesUserExist).toHaveLength(0)

            // Adds a new user
            await TacoLog.add( log1 )

            // Test to make sure user exists
            doesUserExist = await db('TacoLog')
                    .where({restaurantName: "La Grange"})
                    expect(doesUserExist).toHaveLength(1)
            // La Grange post confirmed in Insomnia
        })
    })

    describe("Find all TacoLogs", () => {

        // passing two new users
        it('should return all TacoLogs', async () => {
            await TacoLog.add(log1)
            await TacoLog.add(log2)

            let allTacoLog = await TacoLog.find()
            expect(allTacoLog).toHaveLength(2)
            // La Grange and Del Taco posts confirmed in Insomnia
        })
    }) 

    describe("Delete a TacoLog by id", () => {

        // passing two new users, then the second one will be deleted
        it('should return one TacoLog', async () => {
            await TacoLog.add(log1)
            await TacoLog.add(log2)

        let delTacoLog = await TacoLog.remove(1)
        expect(delTacoLog).toBe(1)
        //  La Grange post confirmed in Insomnia
    })
  }) 

//   describe("Find a user by id", () => {
//     // passing three new users, then the second one will be the target id
//     it('should return all users', async () => {
//       await Users.add(user1)
//       const targetUser = await Users.add(user2)
//       await Users.add(user3)

      
//       await Users.findById(2)
//       expect(targetUser.firstName).toBe('Bob')
//   })
// }) 

// describe("Update a user by id", () => {
//     // passing a new user
//     it('should return an updated user ', async () => {
//       // create an initial user
//       const newUser = await Users.add(user1)
//       await Users.update(newUser.id, user2)
//       const updatedUser = await Users.findById(newUser.id)
//       expect(updatedUser.firstName).toBe("Bob")
//   })
//  })  
})