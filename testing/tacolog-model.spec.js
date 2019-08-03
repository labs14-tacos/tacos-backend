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

            const newTacoLog = await TacoLog.add(log1)
            const remainingTacoLog = await TacoLog.add(log2)
            const newTacoLogId = (newTacoLog.id)
      
        await TacoLog.remove(newTacoLogId)
        expect(remainingTacoLog.tacoName).toBe("fish taco")
        //  La Grange post confirmed in Insomnia
    })
  }) 

  describe("Find tacolog by id", () => {
    // passing three new users, then the second one will be the target id
    it('should return all tacologs', async () => {
      await TacoLog.add(log1)
      const targetTacoLog = await TacoLog.add(log2)
      await TacoLog.add(log3)

      
      await TacoLog.findById(2)
      expect(targetTacoLog.restaurantName).toBe('Del Taco')
  })
}) 

describe("Update a tacolog by id", () => {
    // passing a new user
    it('should return an updated tacoLog ', async () => {
      // create an initial user
      const newTacoLog = await TacoLog.add(log1)
      await TacoLog.update(newTacoLog.id, log2)
      const updatedTacoLog = await TacoLog.findById(newTacoLog.id)
      expect(updatedTacoLog.restaurantName).toBe("Del Taco")
  })
 })  
})   