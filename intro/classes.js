"use strict"

const Database = require('./Database');

const userDatabase = new Database();

userDatabase.addEntry({
    id: '1234567890',
    name: 'Lukas'
}, error => {
    console.log(`addEntry error: ${error}`);
    userDatabase.getEntryWithId('1234567890', (error, user) => {
        console.log(`getEntryWithId error: ${error}`);
        console.log(user);
    });
});
 