const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');
const {userTest1, userTest2, userTest3} = require('./helper2');



beforeEach(async () => {
    await db('users').truncate()
})



describe('GET/', () => {
    it('should respond with 200', () => {
        return request(server).get('/')
        .then(res => {
            expect(res.status).toBe(200)
        })
    })
})

describe('POST/users', () => {
    
    it('should respond with 422 error', async () => {
        const res = await request(server)
        .post('/api/users')
        .send(userTest1);
        expect(res.status)
        .toBe(422);
    })

    it('should return status code 201', async  () => {

            const res = await request(server)
            .post('/api/users')
            .send(userTest2);


        expect(res.status)
        .toEqual(201)
        })

    })

    describe('GET/api/users/:id', () => {
        it('should get user by id', async () => {
            await db("users")
            .insert(userTest2);
            return request(server)
            .get('/api/users/27')
            .then(res => {
                console.log(res.body)
                expect(res.status).toBe(200)
            })
        })

        it('should return error 404', async () => {
            await db("users")
            // .insert(userTest3);
            return request(server)
            .get('/api/users/55')
            .then(res => {
                console.log(res.body)
                expect(res.status).toEqual(404)
            })
        })

    })