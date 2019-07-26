const db = require('../data/dbConfig');

const Users = require('../data/models/users-model');

describe('Users Model', () => {

    beforeEach(async () => {
        await db('Users')
        .truncate();
    })

    describe('add()', () => {

        it('will add users to the db', async () => {

            const user = {
                id: 1,
                firebaseId: "ThisIsAFakeFirebaseId",
                firstName: "Jamie",
                lastName: "Jamison",
                email: "jamietheman@hotmail.com",
                userPhoto: "http://unsplash.it/100/100",
                zipCode: 92392,
                tacosPerMonth: 5,
                hardOrSoft: "soft",
                cornOrFlower: "flower",
                heatPreference: 5,
                streetOrGourmet: "street",
                favTaco: "chicken",
                favTacoLocation: "Los Cuscos",
                bestTacoMemory: "homemade tacos",
                instaHandle: "Instagram goes here",
                twitterHandle: "twitter goes here",
                facebookPage: "facebook page goes here",
                website: "espn.com"
            }
            
            await Users.add(user)
            const newUser = await db('Users')
            expect(newUser).toHaveLength(1)
            
        })
    })

    describe('update()', () => {

        it('will add users to the db', async () => {

            const changes = {
                id: 1,
                firebaseId: "ThisIsAFakeFirebaseId2",
                firstName: "Jamie",
                lastName: "Jamison",
                email: "jamietheman2@hotmail.com",
                userPhoto: "http://unsplash.it/101/100",
                zipCode: 92392,
                tacosPerMonth: 5,
                hardOrSoft: "soft",
                cornOrFlower: "flower",
                heatPreference: 5,
                streetOrGourmet: "street",
                favTaco: "chicken",
                favTacoLocation: "Los Cuscos",
                bestTacoMemory: "homemade tacos",
                instaHandle: "Instagram goes here",
                twitterHandle: "twitter goes here",
                facebookPage: "facebook page goes here",
                website: "espn.com"
            }
            
            await Users.update(changes)
            const updateUser = await db('Users')
            expect(updateUser).toEqual(changes)
            
        })
    })
})