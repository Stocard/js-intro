"use strict"

const async = require('async');
const fs = require('fs');

const files = ['package.json', 'hello-world.js']; // could be more files

async.map(files, (file, next) => {
    fs.readFile(file, (error, contents) => {
    	const contentsAsString = contents.toString();
        next(error, contentsAsString);
    });
}, (error, result) => {
    if (error) return console.log(error);
    console.log(result);
});

// Also interesting:
// async.each();
// async.filter();
// async.parallel();
// async.series();