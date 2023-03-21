//Prompt in js to take user input

'use strict'

const prompt = require('prompt-sync')();
const number = prompt('Enter a number: ');

if (number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

