"use strict"

class Database {

    constructor() {
        this.data = [];
    }

    addEntry(entry, callback) {
        this.data.push(entry);
        callback();
    }

    getEntryWithId(id, callback) {
        if (this._checkId(id) != true) {
            return callback('Id is not valid!');
        }
        const result = this.data.filter(entry => entry.id == id);
        callback(null, result);
    }

    _checkId(id) {
        console.log(id)
        console.log(id.length == 10)
        // id needs to have length 10
        return id.length == 10
    }
}

module.exports = Database;
