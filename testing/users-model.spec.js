const db = require('../data/dbConfig');
// const Users = require('../data/models/users-model');

// new stuff
const {add} = require('../data/models/users-model')
const request = require('supertest')
const server = require('../api/server')

describe('Users Model', () => {

    beforeEach(async () => {
        await db('Users')
        .truncate();
    })

    describe('Add a new user', () => {
        it('should insert a new user', async () => {
            await add ({
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
            })

            const newUser = await db('Users')
            expect(newUser).toHaveLength(1)
        })

        it('should output a 404 due to insufficient content', async () => {
            let newUser = {firstName: "Jamie"}

            const res = await request(server)
                              .post('/api/users')
                              .send(newUser)
            expect(res.statusCode)
            .toEqual(404)
        })


        it('should output a 201 succes code', async () => {
            let newUser = {
                id: 5,
                firebaseId: "ThisIsAFakeFirebaseId33",
                firstName: "Jamie",
                lastName: "Jamison",
                email: "jamietheman33@hotmail.com",
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

            const res = await request(server)
                              .post('/api/users')
                              .send(newUser)
            expect(res.statusCode)
            .toBe(201)
        })
    })
})