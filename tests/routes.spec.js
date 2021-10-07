const request = require('supertest');
const app = require('../server.js');

const testPort = 3020;

describe('APi routes', (done) => {
    let api;

    beforeAll(() => {
        api = app.listen(testPort, () => {
            console.log(`Express server running on port ${testPort}`);
        });
    });

    afterAll(() => {
        console.log('Stopping test server');
        api.close(done);
    });

    test('server', (done) => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    // Testing for getting all entries
    test('GET /entries returns all entries', (done) => {
        request(app)
            .get('/entries')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    // Testing for getting all entries by a particular user
    test('GET /entries/:username returns all entries by a particular user', (done) => {
        request(app)
            .get('/entries/BBC News (UK)')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    test('Error handling GET /entries/:username: User is not found', (done) => {
        request(app)
            .get('/entries/BBC')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
    });

    // Testing for getting all comments on an entry 
    test('GET /entries/comments/:id returns all comments on entry with id number of id', (done) => {
        request(app)
            .get('/entries/comments/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    test('Error handling GET /entries/comments/:id: Out of index comment', (done) => {
        request(api)
            .get('/entries/comments/0')
            .expect({ "message": "Entry of id 0 not found" })
            .expect(404, done);
    });

    // Testing for when a new comment is posted on an entry
    test('POST /entries/comments/:id returns new comment', (done) => {
        let testComments = {
            text: "I feel like starting an argument, so: What actor, living or dead, any gender, was the greatest combination of acting talent, physical beauty and pure star-power charisma?",
            author: "Scott Renshaw"
        }
        request(api)
            .post('/entries/comments/1')
            .send(testComments)
            .set('Accept', 'application/json')
            .expect('content-Type', /json/)
            .expect({ id: 3, ...testComments })
            .expect(201, done);
    });

    test('Error handling POST /entries/comments/:id: Entry with id number of id doesn\'t exist', (done) => {
        let testComments = {
            text: "I feel like starting an argument, so: What actor, living or dead, any gender, was the greatest combination of acting talent, physical beauty and pure star-power charisma?",
            author: "Scott Renshaw"
        }
        request(api)
            .post('/entries/comments/100')
            .send(testComments)
            .set('Accept', 'application/json')
            .expect('content-Type', /json/)
            .expect({ message: 'Entry of id 100 not found' })
            .expect(404, done);
    })

    // Testing for when a new entry is posted
    test('POST /entries returns newly created entry', (done) => {
        let testEntry = {
            "title": "Hello world",
            "username": "testuser1",
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "gifUrl": "hello"
        }
        request(api)
            .post('/entries')
            .send(testEntry)
            .set('Accept', 'application/json')
            .expect('content-Type', /json/)
            .expect({
                id: 11, ...testEntry, "date": `${new Date()}`,
                "reactions": {
                    "happy": 0,
                    "love": 0,
                    "angry": 0
                },
                "comments": []
            })
            .expect(201, done);
    });

    test('Error handling POST /entries: Request body has missing fields', (done) => {
        let testEntry = {
            "title": "Hello world",
            "username": "testuser1",
            "gifUrl": "hello"
        }
        request(api)
            .post('/entries')
            .send(testEntry)
            .set('Accept', 'application/json')
            .expect('content-Type', /json/)
            .expect({ message: 'Please fill in the required title, username, message and gifUrl fields' })
            .expect(400, done);
    });

    // Testing for when the message on an entry is changed
    test('PUT /entries/:id returns confirmation of successful request', (done) => {
        let testMessage = { "message": "An edit has been made to this message" }

        request(api)
            .put('/entries/6')
            .send(testMessage)
            .expect({ message: 'Entry of id 6 successfully updated' })
            .expect(201, done);
    });

    test('Error handling PUT /entries/:id: Entry with id number of id doesn\'t exist', (done) => {
        let testMessage = { "message": "An edit has been made to this message" }

        request(api)
            .put('/entries/200')
            .send(testMessage)
            .expect({ message: 'Entry of id 200 not found' })
            .expect(404, done);
    });

    // Testing for when a reaction is selected
    test('PUT /entries/reactions/:id returns confirmation of successful request', (done) => {
        let testData1 = { "reaction": "happy" }

        request(api)
            .put('/entries/reactions/5')
            .send(testData1)
            .expect(201, done);
    });

    test('Error handling PUT /entries/reactions/:id: Invalid reaction entered', (done) => {
        let testData2 = { "reaction": "sad" }

        request(api)
            .put('/entries/reactions/5')
            .send(testData2)
            .expect({ message: 'sad is an invalid input' })
            .expect(400, done);
    });

    test('Error handling PUT /entries/reactions/:id: Entry with id number of id doesn\'t exist', (done) => {
        let testData = { "reaction": "happy" }

        request(api)
            .put('/entries/reactions/100')
            .send(testData)
            .expect({ message: 'Entry of id 100 not found' })
            .expect(404, done)
    });

    // Testing for deleting an entry
    test('DELETE /entries/delete/:id returns confirmation of successful request', (done) => {
        request(api)
            .delete('/entries/delete/5')
            .expect({ message: 'Entry of id 5 successfully deleted' })
            .expect(202, done);
    });

    test('Error handling DELETE /entries/delete/:id: Entry with id number of id doesn\'t exist', (done) => {
        request(api)
            .delete('/entries/delete/4000')
            .expect({ message: 'Entry of id 4000 not found' })
            .expect(404, done);
    });

    // Testing for deleting a comment in an entry
    test('DELETE /entries/comments/delete/:entryId/:commentId returns confirmation of successful request', (done) => {
        request(api)
            .delete('/entries/comments/delete/3/1')
            .expect({ message: 'Comment 1 from entry of id 3 successfully deleted' })
            .expect(202, done);
    });

    test('Error handling DELETE /entries/comments/delete/:entryId/:commentId: Entry with id number of id doesn\'t exist', (done) => {
        request(api)
            .delete('/entries/comments/delete/20/11')
            .expect({ message: 'Comment 11 from entry of id 20 not found' })
            .expect(404, done);
    });
});
