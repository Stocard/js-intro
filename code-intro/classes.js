"use strict"

const Database = require('./Database');

const userDatabase = new Database();

userDatabase.addEntry({
    id: '123456789',
    name: 'Lukas'
}, error => {
    if(error) console.log(`addEntry error: ${error}`);
    userDatabase.getEntryWithId('123456789', (error, user) => {
        if(error) console.log(`getEntryWithId error: ${error}`);
        console.log(user);
    });
});
 