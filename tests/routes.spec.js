const request = require('supertest');
const app = require('./server.js')

describe('api routes', () => {

    test('Get all entries', () => {
        request(app)
            .get('/entries')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    })

    test('', () => {

    })

    test('', () => {

    })
})



