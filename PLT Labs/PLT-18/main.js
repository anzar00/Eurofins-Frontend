// Write a program to store N elements in an array of integer. Display the elements. 
// Sort the elements. Accept a number to be searched. Display whether the number is found or 
// not in the array using BINARY SEARCH.

'use strict'
const prompt = require('prompt-sync')();
const n = prompt('Enter n: ');

let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Enter element: `);
}

// Print the array

for (let i = 0; i < n; i++) {
    process.stdout.write(arr[i] + " ");
}

// Sort the array 

arr.sort();


// Print the sorted array

console.log();
for (let i = 0; i < n; i++) {
    process.stdout.write(arr[i] + " ");
}

console.log();
// Enter the number to be searched

const num = prompt('Enter the number to be searched: ');

// Binary search

let low = 0;
let high = n - 1;
let mid = 0;
let found = false;

while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] == num) {
        found = true;
        break;
    }
    else if (arr[mid] < num) {
        low = mid + 1;
    }
    else {
        high = mid - 1;
    }
}

if (found) {
    console.log('The number is found at position ' + (mid + 1) + '.');
}
else {
    console.log('The number is not found.');
}