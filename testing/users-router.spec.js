const request = require('supertest')
const server = require('../api/server')

const {user3} = require('./helper')
const {userTest1, userTest2, userTest3} = require('./helper2')


describe('GET /', () => {

    it('responds with 200 code, list of all users', function (done) {
        request(server)
          .get("/api/users")
          .set('Accept', 'application/json')
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