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

    //All Entries
    test('Get all entries', (done) => {
        request(app)
            .get('/entries')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    })
    // Entries by a particular user
    test('Get entries by a particular user', (done) => {
        request(app)
            .get('/entries/BBC News (UK)')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    })
    // Testing Error handling of Entries of an unknown user
    test('Error handling when Get all entries by a particular user', (done) => {
        request(app)
            .get('/entries/BBC')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);

    })
    // comments 
    test('Get all comments on a particular entry', (done) => {
        request(app)
            .get('/entries/comments/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    })
    // testing error handling of out of index comment
    test("out of index comment is handled", (done) => {
        request(api)
            .get("/entries/comments/0")
            .expect({ "message": "Entry of id 0 not found" }, done);
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







