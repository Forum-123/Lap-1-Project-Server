const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const entryData = require('./data'); // Access to the entry data
const Entry = require('./models/entry'); // Obtain the Entry class

// Get all entries
app.get('/entries', (req, res) => {
    const entriesArr = Entry.all;
    res.send(entriesArr);
});

// Get all entries by a particular user
app.get('/entries/:username', (req, res) => {

});

// Get all comments for an entry
app.get('/entries/comments/:id', (req, res) => {

});

// Post new entry
app.post('/entries/new', (req, res) => {

});

// Post new comment on a particular entry
app.post('/entries/comments/new/:id', (req, res) => {

});

// Change reaction on an entry
app.post('/entries/reactions/:id', (req, res) => {

});

// Delete entry
app.delete();

module.exports = app;