// Write a program to generate 1, 2, 6, 15, 31, 56 … N


'use strict';
const prompt = require('prompt-sync')();

const n = prompt('Enter the number of elements in the series: ');

function generateSeries(n) {
    let result = [];
    let sum = 1;
    for (let i = 0; i <= n; i++) {
        sum += i * i;
        result.push(sum);
    }
    return result;
    
}
    

const result = generateSeries(n);
console.log(result);