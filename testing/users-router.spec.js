const request = require('supertest')
const server = require('../api/server')

const {user3} = require('./helper')
const {userTest1, userTest2, userTest3} = require('./helper2')


describe('GET /', () => {

    it('responds with 200 code, list of all users', function (done) {
        request(server)
          .get("/api/users")
          .set('Accept', 'application/json')
          .set('token', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyODRlYTZiNGZlZDBmZDc1MzE4NTg2NDZmZDYzNjE1ZGQ3YTIyZjUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGF2aWQgTSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLW1LcTNUdEtqS2xJL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUR3L1FaVXFZc1JLZjNVL3Bob3RvLmpwZyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zdGFnaW5nLXRhY29zIiwiYXVkIjoic3RhZ2luZy10YWNvcyIsImF1dGhfdGltZSI6MTU2NTI5NTE3MywidXNlcl9pZCI6IjJOV093SGVPV2ROM0h2dVdWZDk2cnk2WjU1QzIiLCJzdWIiOiIyTldPd0hlT1dkTjNIdnVXVmQ5NnJ5Nlo1NUMyIiwiaWF0IjoxNTY1Mjk1MTczLCJleHAiOjE1NjUyOTg3NzMsImVtYWlsIjoibXlwY2NhY2N0QGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTUxNzUxOTM2MzA4NTUzNDY0MjAiXSwiZW1haWwiOlsibXlwY2NhY2N0QGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.PeuSDP_SrpKjPzFTc2ugRgh2jP3NRDZfnQXHo7SfCLTN5A2npqtXOxd-W6Dt7AYI9oz-42KEDHu6YmulNJuMqwSKlzmH6AmCJqppU2wN0jBzHLf70OhdVubkNU8UMx4KDC3-TOFm0OyKli7qqerJZdkCdDwvMoq194zLzyRLVpuAUJGWUxbR6jQHhdvKCPUQpygcYHjLUBrBx1tl9k9TQbf7nLeXvt06DCFvkx3tGSUfvlS1o3DKyWhM_Z3el6TWJl3Xtts8NO2ejorendSAbvBu5lJBMtJRHCmKBM-ouwR6AUHvnetTIaIz1-oykm95fua_U4Il0ICzsguUdqm1Xw')
          .expect('Content-Type', /json/)
          .expect(200).end(done)
    })

    it('responds with a 200 code, gets user by ID', function (done) {
        request(server)
         .get("/api/users/1")
         .set('Accept', 'application/json')
         .set('token', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyODRlYTZiNGZlZDBmZDc1MzE4NTg2NDZmZDYzNjE1ZGQ3YTIyZjUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGF2aWQgTSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLW1LcTNUdEtqS2xJL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUR3L1FaVXFZc1JLZjNVL3Bob3RvLmpwZyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zdGFnaW5nLXRhY29zIiwiYXVkIjoic3RhZ2luZy10YWNvcyIsImF1dGhfdGltZSI6MTU2NTI5NTE3MywidXNlcl9pZCI6IjJOV093SGVPV2ROM0h2dVdWZDk2cnk2WjU1QzIiLCJzdWIiOiIyTldPd0hlT1dkTjNIdnVXVmQ5NnJ5Nlo1NUMyIiwiaWF0IjoxNTY1Mjk1MTczLCJleHAiOjE1NjUyOTg3NzMsImVtYWlsIjoibXlwY2NhY2N0QGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTUxNzUxOTM2MzA4NTUzNDY0MjAiXSwiZW1haWwiOlsibXlwY2NhY2N0QGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.PeuSDP_SrpKjPzFTc2ugRgh2jP3NRDZfnQXHo7SfCLTN5A2npqtXOxd-W6Dt7AYI9oz-42KEDHu6YmulNJuMqwSKlzmH6AmCJqppU2wN0jBzHLf70OhdVubkNU8UMx4KDC3-TOFm0OyKli7qqerJZdkCdDwvMoq194zLzyRLVpuAUJGWUxbR6jQHhdvKCPUQpygcYHjLUBrBx1tl9k9TQbf7nLeXvt06DCFvkx3tGSUfvlS1o3DKyWhM_Z3el6TWJl3Xtts8NO2ejorendSAbvBu5lJBMtJRHCmKBM-ouwR6AUHvnetTIaIz1-oykm95fua_U4Il0ICzsguUdqm1Xw')
         .expect('Content-Type', /json/)
         .expect(200).end(done)
    })

    it('responds with a 404 code, user ID not found', function(done) {
        request(server)
         .get("/api/users/278")
         .set('Accept', 'application/json')
         .set('token', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyODRlYTZiNGZlZDBmZDc1MzE4NTg2NDZmZDYzNjE1ZGQ3YTIyZjUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGF2aWQgTSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLW1LcTNUdEtqS2xJL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUR3L1FaVXFZc1JLZjNVL3Bob3RvLmpwZyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zdGFnaW5nLXRhY29zIiwiYXVkIjoic3RhZ2luZy10YWNvcyIsImF1dGhfdGltZSI6MTU2NTI5NTE3MywidXNlcl9pZCI6IjJOV093SGVPV2ROM0h2dVdWZDk2cnk2WjU1QzIiLCJzdWIiOiIyTldPd0hlT1dkTjNIdnVXVmQ5NnJ5Nlo1NUMyIiwiaWF0IjoxNTY1Mjk1MTczLCJleHAiOjE1NjUyOTg3NzMsImVtYWlsIjoibXlwY2NhY2N0QGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTUxNzUxOTM2MzA4NTUzNDY0MjAiXSwiZW1haWwiOlsibXlwY2NhY2N0QGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.PeuSDP_SrpKjPzFTc2ugRgh2jP3NRDZfnQXHo7SfCLTN5A2npqtXOxd-W6Dt7AYI9oz-42KEDHu6YmulNJuMqwSKlzmH6AmCJqppU2wN0jBzHLf70OhdVubkNU8UMx4KDC3-TOFm0OyKli7qqerJZdkCdDwvMoq194zLzyRLVpuAUJGWUxbR6jQHhdvKCPUQpygcYHjLUBrBx1tl9k9TQbf7nLeXvt06DCFvkx3tGSUfvlS1o3DKyWhM_Z3el6TWJl3Xtts8NO2ejorendSAbvBu5lJBMtJRHCmKBM-ouwR6AUHvnetTIaIz1-oykm95fua_U4Il0ICzsguUdqm1Xw')
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
          .set('token', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyODRlYTZiNGZlZDBmZDc1MzE4NTg2NDZmZDYzNjE1ZGQ3YTIyZjUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGF2aWQgTSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLW1LcTNUdEtqS2xJL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUR3L1FaVXFZc1JLZjNVL3Bob3RvLmpwZyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zdGFnaW5nLXRhY29zIiwiYXVkIjoic3RhZ2luZy10YWNvcyIsImF1dGhfdGltZSI6MTU2NTI5NTE3MywidXNlcl9pZCI6IjJOV093SGVPV2ROM0h2dVdWZDk2cnk2WjU1QzIiLCJzdWIiOiIyTldPd0hlT1dkTjNIdnVXVmQ5NnJ5Nlo1NUMyIiwiaWF0IjoxNTY1Mjk1MTczLCJleHAiOjE1NjUyOTg3NzMsImVtYWlsIjoibXlwY2NhY2N0QGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTUxNzUxOTM2MzA4NTUzNDY0MjAiXSwiZW1haWwiOlsibXlwY2NhY2N0QGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.PeuSDP_SrpKjPzFTc2ugRgh2jP3NRDZfnQXHo7SfCLTN5A2npqtXOxd-W6Dt7AYI9oz-42KEDHu6YmulNJuMqwSKlzmH6AmCJqppU2wN0jBzHLf70OhdVubkNU8UMx4KDC3-TOFm0OyKli7qqerJZdkCdDwvMoq194zLzyRLVpuAUJGWUxbR6jQHhdvKCPUQpygcYHjLUBrBx1tl9k9TQbf7nLeXvt06DCFvkx3tGSUfvlS1o3DKyWhM_Z3el6TWJl3Xtts8NO2ejorendSAbvBu5lJBMtJRHCmKBM-ouwR6AUHvnetTIaIz1-oykm95fua_U4Il0ICzsguUdqm1Xw')
          .expect('Content-Type', /json/)
          .expect(201)
          .end((err) => {
              if(err) return done(err)
              done();
          })
    })

    // it('responds with 404 code, user not created', function(done) {
    //     request(server)
    //     .post('/api/users')
    //       .send(userTest1)
    //       .set('Accept', 'application/json')
    //       .set('token', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyODRlYTZiNGZlZDBmZDc1MzE4NTg2NDZmZDYzNjE1ZGQ3YTIyZjUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGF2aWQgTSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLW1LcTNUdEtqS2xJL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUR3L1FaVXFZc1JLZjNVL3Bob3RvLmpwZyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zdGFnaW5nLXRhY29zIiwiYXVkIjoic3RhZ2luZy10YWNvcyIsImF1dGhfdGltZSI6MTU2NTI4ODE5MiwidXNlcl9pZCI6IjJOV093SGVPV2ROM0h2dVdWZDk2cnk2WjU1QzIiLCJzdWIiOiIyTldPd0hlT1dkTjNIdnVXVmQ5NnJ5Nlo1NUMyIiwiaWF0IjoxNTY1Mjg4MTkyLCJleHAiOjE1NjUyOTE3OTIsImVtYWlsIjoibXlwY2NhY2N0QGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTUxNzUxOTM2MzA4NTUzNDY0MjAiXSwiZW1haWwiOlsibXlwY2NhY2N0QGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.VPfLgZyBSq_XvehbWCFf04X7T-MqqDRCNbqam6GfmLdVBwXA0pk-cJB0KjF2FuAqgpQsY-jk2Q4ALRDr2w1N3QvF3zO7LSdeePgGJe-Al68QShw2cdeFDsZWzNLmuF0DcOkswDbMyrCk3BmJryzXCD42cCpVExSJHD_ozcwq41P3tAwcPAG0-8hedbFYCofGW8vDo7BiX4U8uqt6WVtAsXm61xnk7UoA4sG-uz_-rY42IeL-8T19oCqEL46TDqVHeLTn1BRtT2Z-88R5UMHYsMHNZCMfITB_zaePzPfbmfLJvyXf3rXlHOREufczJ6aAIVRhMCgNKAjkj-JRdxK-Gw')
    //       .expect('Content-Type', /json/)
    //       .expect(404)
    //       .end((err) => {
    //           if(err) return done(err)
    //           done();
    //       })
    // })
})

describe('PUT /', () => {
   
    // it('responds with a 200 code, update successful', function(done) {
    //     request(server)
    //        .put('/api/users/3')
    //        .send(userTest3)
    //        .set('Accept', 'application/json')
    //        .set('token', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyODRlYTZiNGZlZDBmZDc1MzE4NTg2NDZmZDYzNjE1ZGQ3YTIyZjUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGF2aWQgTSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLW1LcTNUdEtqS2xJL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUR3L1FaVXFZc1JLZjNVL3Bob3RvLmpwZyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zdGFnaW5nLXRhY29zIiwiYXVkIjoic3RhZ2luZy10YWNvcyIsImF1dGhfdGltZSI6MTU2NTI5NTE3MywidXNlcl9pZCI6IjJOV093SGVPV2ROM0h2dVdWZDk2cnk2WjU1QzIiLCJzdWIiOiIyTldPd0hlT1dkTjNIdnVXVmQ5NnJ5Nlo1NUMyIiwiaWF0IjoxNTY1Mjk1MTczLCJleHAiOjE1NjUyOTg3NzMsImVtYWlsIjoibXlwY2NhY2N0QGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTUxNzUxOTM2MzA4NTUzNDY0MjAiXSwiZW1haWwiOlsibXlwY2NhY2N0QGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.PeuSDP_SrpKjPzFTc2ugRgh2jP3NRDZfnQXHo7SfCLTN5A2npqtXOxd-W6Dt7AYI9oz-42KEDHu6YmulNJuMqwSKlzmH6AmCJqppU2wN0jBzHLf70OhdVubkNU8UMx4KDC3-TOFm0OyKli7qqerJZdkCdDwvMoq194zLzyRLVpuAUJGWUxbR6jQHhdvKCPUQpygcYHjLUBrBx1tl9k9TQbf7nLeXvt06DCFvkx3tGSUfvlS1o3DKyWhM_Z3el6TWJl3Xtts8NO2ejorendSAbvBu5lJBMtJRHCmKBM-ouwR6AUHvnetTIaIz1-oykm95fua_U4Il0ICzsguUdqm1Xw')
    //        .expect('Content-Type', /json/)
    //        .expect(200)
    //        .end((err) => {
    //           if(err) return done(err)
    //           done();
    //       })
    //  })

     it('responds with a 404 code, ID does not exist', function(done) {
        request(server)
           .put('/api/users/175')
           .send(userTest3)
           .set('Accept', 'application/json')
           .set('token', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyODRlYTZiNGZlZDBmZDc1MzE4NTg2NDZmZDYzNjE1ZGQ3YTIyZjUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGF2aWQgTSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLW1LcTNUdEtqS2xJL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUR3L1FaVXFZc1JLZjNVL3Bob3RvLmpwZyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zdGFnaW5nLXRhY29zIiwiYXVkIjoic3RhZ2luZy10YWNvcyIsImF1dGhfdGltZSI6MTU2NTI5NTE3MywidXNlcl9pZCI6IjJOV093SGVPV2ROM0h2dVdWZDk2cnk2WjU1QzIiLCJzdWIiOiIyTldPd0hlT1dkTjNIdnVXVmQ5NnJ5Nlo1NUMyIiwiaWF0IjoxNTY1Mjk1MTczLCJleHAiOjE1NjUyOTg3NzMsImVtYWlsIjoibXlwY2NhY2N0QGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTUxNzUxOTM2MzA4NTUzNDY0MjAiXSwiZW1haWwiOlsibXlwY2NhY2N0QGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.PeuSDP_SrpKjPzFTc2ugRgh2jP3NRDZfnQXHo7SfCLTN5A2npqtXOxd-W6Dt7AYI9oz-42KEDHu6YmulNJuMqwSKlzmH6AmCJqppU2wN0jBzHLf70OhdVubkNU8UMx4KDC3-TOFm0OyKli7qqerJZdkCdDwvMoq194zLzyRLVpuAUJGWUxbR6jQHhdvKCPUQpygcYHjLUBrBx1tl9k9TQbf7nLeXvt06DCFvkx3tGSUfvlS1o3DKyWhM_Z3el6TWJl3Xtts8NO2ejorendSAbvBu5lJBMtJRHCmKBM-ouwR6AUHvnetTIaIz1-oykm95fua_U4Il0ICzsguUdqm1Xw')
           .expect('Content-Type', /json/)
           .expect(404)
           .end((err) => {
              if(err) return done(err)
              done();
          })
     })

    //  it('responds with a 400 code, not all fields submitted', function(done) {
    //     request(server)
    //        .put('/api/users/2')
    //        .send(userTest1)
    //        .set('Accept', 'application/json')
    //        .set('token', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyODRlYTZiNGZlZDBmZDc1MzE4NTg2NDZmZDYzNjE1ZGQ3YTIyZjUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGF2aWQgTSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLW1LcTNUdEtqS2xJL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUR3L1FaVXFZc1JLZjNVL3Bob3RvLmpwZyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zdGFnaW5nLXRhY29zIiwiYXVkIjoic3RhZ2luZy10YWNvcyIsImF1dGhfdGltZSI6MTU2NTI5NTE3MywidXNlcl9pZCI6IjJOV093SGVPV2ROM0h2dVdWZDk2cnk2WjU1QzIiLCJzdWIiOiIyTldPd0hlT1dkTjNIdnVXVmQ5NnJ5Nlo1NUMyIiwiaWF0IjoxNTY1Mjk1MTczLCJleHAiOjE1NjUyOTg3NzMsImVtYWlsIjoibXlwY2NhY2N0QGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTUxNzUxOTM2MzA4NTUzNDY0MjAiXSwiZW1haWwiOlsibXlwY2NhY2N0QGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.PeuSDP_SrpKjPzFTc2ugRgh2jP3NRDZfnQXHo7SfCLTN5A2npqtXOxd-W6Dt7AYI9oz-42KEDHu6YmulNJuMqwSKlzmH6AmCJqppU2wN0jBzHLf70OhdVubkNU8UMx4KDC3-TOFm0OyKli7qqerJZdkCdDwvMoq194zLzyRLVpuAUJGWUxbR6jQHhdvKCPUQpygcYHjLUBrBx1tl9k9TQbf7nLeXvt06DCFvkx3tGSUfvlS1o3DKyWhM_Z3el6TWJl3Xtts8NO2ejorendSAbvBu5lJBMtJRHCmKBM-ouwR6AUHvnetTIaIz1-oykm95fua_U4Il0ICzsguUdqm1Xw')
    //        .expect('Content-Type', /json/)
    //        .expect(400)
    //        .end((err) => {
    //           if(err) return done(err)
    //           done();
    //       })
    //  })
})

// describe('DELETE /', () => {

//     it('responds with a 200 code, delete successful', function(done) {
//         request(server)
//            .del('/api/users/1')
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
//            .del('/api/users/134')
//            .set('Accept', 'application/json')
//            .expect('Content-Type', /json/)
//            .expect(404)
//            .end((err) => {
//               if(err) return done(err)
//               done();
//           })
//      })
// })