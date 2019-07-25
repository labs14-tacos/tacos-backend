const request = require('supertest');
const server = require('../api/server');

describe('POST /tacolog', () => {
    it('should post tacolog as application/json', async () => {
      const response = await request(server).post('/tacolog')
  
      expect(response.type).toBe('application/json');
    })
})

describe('GET /', () => {
    it("Should return status code 200", ()  => {
      return request(server)
       .get("/")
       .expect(200)
    })
 })

 describe('GET /id', () => {
  it("Should return status code 200", ()  => {
    return request(server)
     .get("/tacolog/:id")
     .expect(200)
  })
})

describe('GET /tacolog/:userId/tacolog', () => {
  it('Should return a status code of 200', () => {
    return request(server)
    .get('/tacolog/:userId/tacolog')
    .expect(200)
  })
})
  