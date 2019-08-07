const request = require('supertest')
const server = require('../api/server')

const {user3} = require('./helper')
const {userTest1, userTest2, userTest3} = require('./helper2')


describe('GET /', () => {

    it('responds with 200 code, list of all users', function (done) {
        request(server)
          .get("/api/users")
          .set('Accept', 'application/json')
          .set('token', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyODRlYTZiNGZlZDBmZDc1MzE4NTg2NDZmZDYzNjE1ZGQ3YTIyZjUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWVnYW4gSm9uZXMiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy02eGIwbnk2N0R1MC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JjVkswYkZVeHFpbXZrVmpRb1E1VE1aU1RLVUhnL3Bob3RvLmpwZyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zdGFnaW5nLXRhY29zIiwiYXVkIjoic3RhZ2luZy10YWNvcyIsImF1dGhfdGltZSI6MTU2NTA0NDU3NSwidXNlcl9pZCI6IjRxRTRZd0U1Y0hUc2l5ZjYxbGpaSEZjWThVaDIiLCJzdWIiOiI0cUU0WXdFNWNIVHNpeWY2MWxqWkhGY1k4VWgyIiwiaWF0IjoxNTY1MDQ0NTc1LCJleHAiOjE1NjUwNDgxNzUsImVtYWlsIjoibWVnYW5qb25lcy5kZXZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDMzNTQ3NTg3MTI4OTA1NjIwNDMiXSwiZW1haWwiOlsibWVnYW5qb25lcy5kZXZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.rX0-6ZEEeJgNawAxAe6dojxjLGFRlBOGRZlTSTKhc_gO30xENuwEy-M-dCQ6bxzz51uvaf6bUG5H4gz5ZVAm3xXgt1f3vISTudAyD1jhJl1DbW7mBiSsZ1p5Xss8v2mjvQeTzxhtwDAbLiPLisak8LNRaUi9E76Mur489eF3QL2Aa9XVvL_-GO2IJSk05krtjRaEcUT6y-WhEG_eK5wox6IT_4iGV90v3yTPzdIzhFkNjcIPOePYsZZ4tzLvBcxjf_fY1tPCMiELYLXtyZjGeWNRkQs4R4wFSfjbkqZg4HNAvyt_qPOeeJe2oUHzz880PJxQpdJUy_RfJUgO_hbuGw')
          .expect('Content-Type', /json/)
          .expect(200).end(done)
    })

    it('responds with a 200 code, gets user by ID', function (done) {
        request(server)
         .get("/api/users/2")
         .set('Accept', 'application/json')
         .expect('Content-Type', /json/)
         .expect(200).end(done)
    })

    it('responds with a 404 code, user ID not found', function(done) {
        request(server)
         .get("/api/users/278")
         .set('Accept', 'application/json')
         .expect('Content-Type', /json/)
         .expect(404).end(done)
    })

})

describe('POST /', () => {

    it('responds with a 201 code, user created', function(done) {
        request(server)
          .post('/api/users')
          .send(user3)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end((err) => {
              if(err) return done(err)
              done();
          })
    })

    it('responds with 404 code, user not created', function(done) {
        request(server)
        .post('/api/users')
          .send(userTest1)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(404)
          .end((err) => {
              if(err) return done(err)
              done();
          })
    })
})

describe('PUT /', () => {
   
    it('responds with a 200 code, update successful', function(done) {
        request(server)
           .put('/api/users/3')
           .send(userTest3)
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(200)
           .end((err) => {
              if(err) return done(err)
              done();
          })
     })

     it('responds with a 404 code, ID does not exist', function(done) {
        request(server)
           .put('/api/users/175')
           .send(userTest3)
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(404)
           .end((err) => {
              if(err) return done(err)
              done();
          })
     })

     it('responds with a 400 code, not all fields submitted', function(done) {
        request(server)
           .put('/api/users/2')
           .send(userTest1)
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(400)
           .end((err) => {
              if(err) return done(err)
              done();
          })
     })
})

describe('DELETE /', () => {

    it('responds with a 200 code, delete successful', function(done) {
        request(server)
           .del('/api/users/1')
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(200)
           .end((err) => {
              if(err) return done(err)
              done();
          })
     })

    it('responds with a 404 code, ID not found', function(done) {
        request(server)
           .del('/api/users/134')
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(404)
           .end((err) => {
              if(err) return done(err)
              done();
          })
     })
})