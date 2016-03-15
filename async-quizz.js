"use strict"

const async = require('async');

// Functions
function callAfterOneSecond(callback) { /* does what the name says */ }
function callAfterTwoSeconds(callback) { /* does what the name says */ }
function callAfterThreeSeconds(callback) { /* does what the name says */ }
function callAfterFourSeconds(callback) { /* does what the name says */ }

// Script
console.log('1');
callAfterTwoSeconds(() => {
    console.log('2');
});
console.log('3');
callAfterOneSecond(() => {
    callAfterTwoSeconds(() => {
        console.log('4');
    });
});
console.log('5');
async.parallel([
    callback => {
        callAfterOneSecond(() => {
            console.log('6');
            callback();
        });
    },
    callback => {
        callAfterFourSeconds(() => {
            console.log('7');
            callback();
            console.log('8');
        });
    },
], () => {
    console.log('9');
});
console.log('10');
