const entryData = require('../data');

class Entry {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.message = data.message;
        this.date = new Date();
        this.username = data.username;
        this.gifUrl = data.gifUrl;
        this.reactions = { happy: 0, love: 0, angry: 0 };
        this.comments = [];
    }
   
    // READ all entries
    static get all() {
        return entryData;
    }

    // READ one entry
    static getEntry(id) {
        const selectedEntry = entryData.filter((entry) => entry.id === id);
        return selectedEntry;
    }

    // READ all entries by one username
    static getEntryByUsername(username) {
        const selectedEntries = entryData.filter((entry) => entry.username === username);
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
    static addComment(id, comment, username) {
        const selectedEntry = Entry.getEntry(id);
        const newCommentId = selectedEntry[0].comments.length + 1;
        selectedEntry[0].comments.push({ id: newCommentId, text: comment, author: username });
        return selectedEntry;
    }

    // UPDATE entry's message
    static changeEntry(id, newMessage) {
        const oldEntry = Entry.getEntry(id);
        oldEntry.message = newMessage;
        return oldEntry;
    }

    // UPDATE reaction
    static changeReaction(id, newReaction) {
        const entry = Entry.getEntry(id);
        entry.reactions[newReaction]++;
        return entry;
    }

    // DELETE entry
    static deleteEntry(id) {
        const entry = entryData.filter((entry) => entry.id === id)[0];
        entryData.splice(entryData.indexOf(entry), 1);
        return entryData;
    }

    // DELETE comment
    static deleteComment() {
        // const comment = entryData.comments.filter((comment) => comment)
    }
}

module.exports = Entry;