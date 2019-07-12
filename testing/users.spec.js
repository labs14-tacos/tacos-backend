const request = require('supertest');
const server = require('../api/server');

describe('POST /api/user', () => {
  it('should post user as application/json', async () => {
    const response = await request(server).post('/api/users')

    expect(response.type).toBe('application/json');
  })
})