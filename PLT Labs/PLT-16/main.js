// Write a program to find X ^ N (x to the power of n) without using in-built functions. Accept X and n. Display the result.

'use strict';
const prompt = require('prompt-sync')();

const x = Number(prompt('Enter the value of X: '));
const n = Number(prompt('Enter the value of N: '));

let result = 1;

for (let i = 1; i <= n; i++) {
    result *= x;
}

console.log(`${x} ^ ${n} = ${result}`);
