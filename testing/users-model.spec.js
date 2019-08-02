const db = require('../data/dbConfig');
const Users = require('../data/models/users-model');
const {user1, user2, user3} = require('./helper.js');


beforeEach(async () => {
    await db('Users')
    .del()
})

describe("Users Model", () => {
  
    
    describe("Find all Users", () => {
        // passing two new users
        it('should return all Users', async () => {
            await Users.add(user1)
            await Users.add(user2)

            let allUsers = await Users.find()
            expect(allUsers).toHaveLength(2)
            // David Lee Roth and Edward Van Halen posts confirmed in Insomnia
        })
    }) 

    describe("Add a new user", () => {

        // checks to confirm there are no users
        it('should insert a new user yahoo', async () => {
            let doesUserExist = await db('Users')
                    .where({firstName: "Frank"})
                    expect(doesUserExist).toHaveLength(0)

            // Adds a new user
            await Users.add( user1 )

            // Test to make sure user exists
            doesUserExist = await db('Users')
                    .where({firstName: "Jamie"})
                    expect(doesUserExist).toHaveLength(1)
            // Dwezil post confirmed in Insomnia
        })
    })



    describe("Delete a User by id", () => {

        // passing two new users, then the second one will be deleted
        it('should delete a User', async () => {

            const newUser = await Users.add(user1)
            await Users.add(user2)
            const newUserId = (newUser.id)

            let delUser = await Users.removeUser(newUserId)
            expect(delUser).toBe(1)
        // David Lee Roth post confirmed in Insomnia
    })
  }) 

  describe("Find a user by id", () => {
    // passing three new users, then the second one will be the target id
    it('should return all users', async () => {
      await Users.add(user1)
      const targetUser = await Users.add(user2)
      await Users.add(user3)

      
      await Users.findById(2)
      expect(targetUser.firstName).toBe('Bob')
  })
}) 

describe("Update a user by id", () => {
    // passing a new user
    it('should return an updated user ', async () => {
      // create an initial user
      const newUser = await Users.add(user1)
      await Users.update(newUser.id, user2)
      const updatedUser = await Users.findById(newUser.id)
      expect(updatedUser.firstName).toBe("Bob")
  })
})
})