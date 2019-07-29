// const request = require('supertest');
// const server = require('../api/server');


// describe('POST /api/user', () => {
//   it('should post user as application/json', async () => {
//     const response = await request(server).post('/api/users')

//     expect(response.type).toBe('application/json');
//   })
// })


// describe('GET /api/users', () => {
//    it("Should return status code 200", ()  => {
     
//       // .get("/api/users")  can remvoe this
//       // .expect(200)
    
//       request(server)
//       .get(`/api/users/`)
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200);
//    })
// })

// describe('GET /api/users/id', () => {
//   it("Should return status code 200", ()  => {
//     //  .get("/api/users/2") can remove this
//     //  .expect(200)
//     let Id = 35
//      request(server)
//       .get(`/api/users/${Id}`)
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200);
//   })
// })