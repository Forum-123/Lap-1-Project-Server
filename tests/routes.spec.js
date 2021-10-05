const request = require('supertest');
const app = require('../server.js');



describe('APi routes', (done) => {

    let api;

    beforeAll(() => {
        api = app.listen(3020, () => {
            console.log(`Express server running on port 3020`)
        });

    })

    afterAll(() => {
        console.log('Stopping test server')
        api.close(done)
    })

    test('server', (done) => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
    //test for get All Entries
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
            .expect({ "message": "Entry of id 0 not found" })
            .expect(404, done);
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

    // handle error test Post route when posting a new comment on a particular entry
    test(" error handling for Post new comment on a particular entry", (done) => {
        let testComments =
        {
            text: "I feel like starting an argument, so: What actor, living or dead, any gender, was the greatest combination of acting talent, physical beauty and pure star-power charisma?",
            author: "Scott Renshaw"
        }
        request(api)
            .post('/entries/comments/100')
            .send(testComments)
            .set('Accept', 'application/json') //set - will set what we expect to get from this
            .expect('content-Type', /json/) // expect to get back some json
            .expect({ message: `Entry of id 100 not found` })
            .expect(404, done) // 201 = status code when something is successfully created
    })
    //handle errors

    // test Post route when posting a new comment on a particular entry
    test(" Post new entry", (done) => {
        let testEntry = {
            "title": "Hello world",
            "username": "testuser1",
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "gif": "hello"
        }
        request(api)
            .post('/entries')
            .send(testEntry)
            .set('Accept', 'application/json') //set - will set what we expect to get from this
            .expect('content-Type', /json/) // expect to get back some json
            .expect({
                id: 11, ...testEntry, "date": `${new Date()}`,
                "reactions": {
                    "happy": 0,
                    "love": 0,
                    "angry": 0
                },
                "comments": []
            })
            .expect(201, done) // 201 = status code when something is successfully created
    })
    // handle error test for Post route when posting a new comment on a particular entry
    test(" handle error for Post new entry", (done) => {
        let testEntry = {
            "title": "Hello world",
            "username": "testuser1",
            "gif": "hello"
        }
        request(api)
            .post('/entries')
            .send(testEntry)
            .set('Accept', 'application/json') //set - will set what we expect to get from this
            .expect('content-Type', /json/) // expect to get back some json
            .expect({ message: 'Please fill in the required title, username, message and gif fields' })
            .expect(400, done)
    })

    // test for Change message on an entry
    test('Change message on an entry', (done) => {
        let testMessage = { "message": "An edit has been made to this message" }

        request(api)
            .put('/entries/6')
            .send(testMessage)
            .expect({ message: `Entry of id 6 successfully updated` })
            .expect(201, done)

    })

    // test error handling for Change message on an entry
    test('Error handling the change message on an entry', (done) => {
        let testMessage = { "message": "An edit has been made to this message" }

        request(api)
            .put('/entries/200')
            .send(testMessage)
            .expect({ message: `Entry of id 200 not found` })
            .expect(404, done)

    })
    // test for change reaction
    test('Change reaction on an entry', (done) => {
        let testData1 = { "reaction": "happy" }

        request(api)
            .put('/entries/reactions/5')
            .send(testData1)
            .expect(201, done)

    })

    // test invalid input for change reaction route
    test('invalid input in Change reaction of an entry', (done) => {
        let testData2 = { "reaction": "sad" }

        request(api)
            .put('/entries/reactions/5')
            .send(testData2)
            .expect({ message: `sad is an invalid input` })
            .expect(400, done)

    })
    // test handlilng error for change reaction
    test('Change reaction on an entry', (done) => {
        let testData = { "reaction": "happy" }
        request(api)
            .put('/entries/reactions/100')
            .send(testData)
            .expect({ message: `Entry of id 100 not found` })
            .expect(404, done)

    })
    // test for Delete entry
    test('deletes entry by id and return a confirmation message', (done) => {
        request(api)
            .delete('/entries/delete/5')
            .expect({ message: `Entry of id 5 successfully deleted` })
            .expect(202, done);
    })

    // test for error handling for delete route
    test('deletes entry by id and return a confirmation message', (done) => {
        request(api)
            .delete('/entries/delete/4000')
            .expect({ message: `Entry of id 4000 not found` })
            .expect(404, done);
    })
    // Testing delete comment in an entry
    test('deletes entry by id and return a confirmation message', (done) => {
        request(api)
            .delete('/entries/comments/delete/3/1')
            .expect({ message: `Comment 1 from entry of id 3 successfully deleted` })
            .expect(202, done);
    })

    // Testing handling Error for delete comment in an entry
    test('deletes entry by id and return a confirmation message', (done) => {
        request(api)
            .delete('/entries/comments/delete/20/11')
            .expect({ message: `Comment 11 from entry of id 20 not found` })
            .expect(404, done);
    })


})







