'use-strict';
const prompt = require('prompt-sync')();

const n = prompt('Enter the number of elements in the series: ');

function generateSeries(n) {
    let result = [];
    let i = 1;
    while ((i * i) <= n) {
        if (i % 4 != 0) {
            result.push(i * i);
        }
        i++;
    }
    return result;
}

const result = generateSeries(n);
console.log(result);