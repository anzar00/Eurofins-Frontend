// Program to grnerate 1, 1, 2, 3, 5, 8, 13, … N 


'use strict'

const prompt = require('prompt-sync')();
const n = prompt('Enter n: ');

// Print Fibonacci series up to n in one line

let a = 0;
let b = 1;
let c = 0;

// array for storing the series
let arr = [];

arr.push(a);
arr.push(b);

for (let i = 2; i < n; i++) {
    c = a + b;
    arr.push(c);
    a = b;
    b = c;
}

console.log(arr);