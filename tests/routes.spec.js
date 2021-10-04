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

    test('', () => {
        request(app)
            .get('/entries/:username')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    })

    test('Get all comments on a particular entry', () => {
        request(app)
            .get('/entries/comments/:id')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    })

})



