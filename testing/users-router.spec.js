const request = require('supertest');
const server = require('../api/server');

describe('POST /api/user', () => {
  it('should post user as application/json', async () => {
    const response = await request(server).post('/api/users')

    expect(response.type).toBe('application/json');
  })
})


describe('GET /api/users', () => {
   it("Should return status code 200", ()  => {
     return request(server)
      .get("/api/users")
      .expect(200)
   })
})

describe('GET /api/users/id', () => {
  it("Should return status code 200", ()  => {
    return request(server)
     .get("/api/users/:id")
     .expect(200)
  })
})