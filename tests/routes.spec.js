const request = require('supertest');
const app = require('../server.js')

describe('APi routes', (done) => {

    let api;

    beforeAll(() => {
        api = app.listen(2000, () => {
            console.log(`Express server running on port 2000`)
        });

    })

    afterAll(() => {
        console.log('Stopping test server')
        api.close(done)
    })


    test('Get all entries', () => {
        request(app)
            .get('/entries')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    })

    test('Get all entries by a particular user', () => {
        request(app)
            .get('/entries/:username')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    })



    test('Get all comments on a particular entry', () => {
        request(app)
            .get('/entries/comments/2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect([{ id: 1, text: "", author: "" }])
            .expect(200, done);

    })

    // test(" Post new comment on a particular entry", (done) => {
    //     request(api)
    //         .post('/entries/comments/:id')
    //         .send()
    //         .set('Accept', 'application/json') //set - will set what we expect to get from this
    //         .expect('content-Type', /json/) // expect to get back some json
    //         .expect()
    //         .expect(201, done) // 201 = status code when something is successfully created
    // })



})



