const request = require('supertest');
const app = require('../server.js');
const data = require('../data')

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
            .get('/entries/comments/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    })
    // test Post route when posting a new comment on a particular entry
    test(" Post new comment on a particular entry", (done) => {
        let testComments =
        {
            text: "I feel like starting an argument, so: What actor, living or dead, any gender, was the greatest combination of acting talent, physical beauty and pure star-power charisma?",
            author: "Scott Renshaw"
        }
        request(api)
            .post('/entries/comments/1')
            .send(testComments)
            .set('Accept', 'application/json') //set - will set what we expect to get from this
            .expect('content-Type', /json/) // expect to get back some json
            .expect({ id: 2, ...testComments })
            .expect(201, done) // 201 = status code when something is successfully created
    })
})







