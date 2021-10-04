const entryData = require('../data');

class Entry {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.message = data.message;
        this.date = new Date();
        this.username = data.username;
        this.gif = data.gif;
        this.reactions = { happy: 0, love: 0, angry: 0 }
        this.comments = [];
    }

    // READ all entries
    static get all() {
        const entries = entryData.map((je) => new Entry(je));
        return entries;
    }

    // READ one entry
    static getEntry(id) {
        const entries = Entry.all;
        const selectedEntry = entries.filter((entry) => entry.id === id);
        return selectedEntry;
    }

    // READ all entries by one username
    static getEntryByUsername(username) {
        const entries = Entry.all;
        const selectedEntries = entries.filter((entry) => entry.username === username);
        return selectedEntries;
    }

    // CREATE entry
    static addEntry(data) {
        const newId = entryData.length + 1;
        const newEntry = new Entry({ id: newId, ...data });
        entryData.push(newEntry);
        return newEntry;
    }

    // CREATE comment
    static addComment(id, comment) {
        const seenEntry = Entry.getEntry(id);
        seenEntry.comments.push(comment);
    }

    // UPDATE entry's message
    static changeEntry(id, newMessage) {
        const oldEntry = Entry.getEntry(id);
        oldEntry.message = newMessage;
        return oldEntry;
    }

    // UPDATE reaction
    static changeReaction(id, oldReaction, newReaction) {
        const entry = Entry.getEntry(id);
        entry.reactions[newReaction]++;
        entry.reactions[oldReaction]--;
        return entry;
    }

    // DELETE entry
    static deleteEntry(id) {
        const entry = entryData.filter((entry) => entry.id === this.id)[0];
        entryData.splice(entryData.indexOf(entry), 1);
    }

    // DELETE comment
    static deleteComment() {
        // const comment = entryData.comments.filter((comment) => comment)
    }
}

module.exports = Entry;

