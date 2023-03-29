// Write a program to store N elements in an array of integer. Display the elements. 
// Accept a number to be searched. Display whether the number is found or not in the array (LINEAR SEARCH).

'use strict'
const prompt = require('prompt-sync')();

const n = prompt('Enter n: ');

let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Enter element: `);
}

console.log();

// Print the array

for (let i = 0; i < n; i++) {
    process.stdout.write(arr[i] + " ");
}

console.log();

// Enter the number to be searched

const num = prompt('Enter the number to be searched: ');

// Linear search

let found = false;

for (let i = 0; i < n; i++) {
    if (arr[i] == num) {
        found = true;
        break;
    }
}

console.log();

if (found) {
    console.log('The number is found.');
}
else {
    console.log('The number is not found.');
}