// const request = require('supertest')
// const server = require('../api/server')
// const {tacolog1, tacolog2, tacolog3} = require('./helperTaco')

// describe('GET /', () => {

//     it('responds with 200 code, list of all tacologs', function (done) {
//         request(server)
//           .get("/tacolog")
//           .set('Accept', 'application/json')
//           .expect('Content-Type', /json/)
//           .expect(200).end(done)
//     })

//     it('responds with a 200 code, gets tocalog by ID', function (done) {
//         request(server)
//          .get("/tacolog/2")
//          .set('Accept', 'application/json')
//          .expect('Content-Type', /json/)
//          .expect(200).end(done)
//     })

//     it('responds with a 404 code, tacolog ID not found', function(done) {
//         request(server)
//          .get("/tacolog/278")
//          .set('Accept', 'application/json')
//          .expect('Content-Type', /json/)
//          .expect(404).end(done)
//     })

// })

// describe('POST /', () => {

//     it('responds with a 201 code, user created', function(done) {
//         request(server)
//           .post('/tacolog')
//           .send(tacolog2)
//           .set('Accept', 'application/json')
//           .expect('Content-Type', /json/)
//           .expect(201)
//           .end((err) => {
//               if(err) return done(err)
//               done();
//           })
//     })

//     it('responds with 404 code, user not created', function(done) {
//         request(server)
//         .post('/tacolog')
//           .send(tacolog1)
//           .set('Accept', 'application/json')
//           .expect('Content-Type', /json/)
//           .expect(404)
//           .end((err) => {
//               if(err) return done(err)
//               done();
//           })
//     })
// })

// describe('PUT /', () => {
   
//     it('responds with a 200 code, update successful', function(done) {
//         request(server)
//            .put('/tacolog/3')
//            .send(tacolog3)
//            .set('Accept', 'application/json')
//            .expect('Content-Type', /json/)
//            .expect(200)
//            .end((err) => {
//               if(err) return done(err)
//               done();
//           })
//      })

//      it('responds with a 404 code, ID does not exist', function(done) {
//         request(server)
//            .put('/tacolog/175')
//            .send(tacolog2)
//            .set('Accept', 'application/json')
//            .expect('Content-Type', /json/)
//            .expect(404)
//            .end((err) => {
//               if(err) return done(err)
//               done();
//           })
//      })

//      it('responds with a 400 code, not all fields submitted', function(done) {
//         request(server)
//            .put('/tacolog/1')
//            .send(tacolog1)
//            .set('Accept', 'application/json')
//            .expect('Content-Type', /json/)
//            .expect(400)
//            .end((err) => {
//               if(err) return done(err)
//               done();
//           })
//      })
// })

// describe('DELETE /', () => {

//     it('responds with a 200 code, delete succesful', function(done) {
//         request(server)
//            .del('/tacolog/13')
//            .set('Accept', 'application/json')
//            .expect('Content-Type', /json/)
//            .expect(200)
//            .end((err) => {
//               if(err) return done(err)
//               done();
//           })
//      })

//     it('responds with a 404 code, ID not found', function(done) {
//         request(server)
//            .del('/tacolog/134')
//            .set('Accept', 'application/json')
//            .expect('Content-Type', /json/)
//            .expect(404)
//            .end((err) => {
//               if(err) return done(err)
//               done();
//           })
//      })
// })  