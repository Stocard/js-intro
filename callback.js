"use strict"

const fs = require('fs');

const fileName = './README.md';

fs.readFile(fileName, (error, content) => {
    if (error) console.log(error);
    console.log(content);
});

function splitLines(text, callback) {
    if (lines == null) return callback('Error: text parameter empty');
    const lines = text.split('\n');
    callback(null, lines);
}

fs.readFile(fileName, (error, content) => {
    if (error) return console.log(error);
    splitLines(content, (error, lines) => {
    	if (error) return console.log(error);
    	console.log(lines);
    });
});
