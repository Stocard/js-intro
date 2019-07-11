'use strict'

// Script

console.log('1')
callAfterTwoSeconds(() => {
    console.log('2')
})
console.log('3')
callAfterOneSecond(() => {
    callAfterTwoSeconds(() => {
        console.log('4')
    })
})
console.log('5')

// Functions

function callAfterOneSecond(callback) {
    setTimeout(callback, 1000)
}
function callAfterTwoSeconds(callback) {
    setTimeout(callback, 2000)
}
function callAfterThreeSeconds(callback) {
    setTimeout(callback, 3000)
}
function callAfterFourSeconds(callback) {
    setTimeout(callback, 4000)
}
