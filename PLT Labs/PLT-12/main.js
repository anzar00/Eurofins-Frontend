function generateSeries(limit) {
    let series = [1, 4];
    let currentTerm = 4;
    let sum = 3;

    while (currentTerm + sum <= limit) {
        currentTerm += sum;
        series.push(currentTerm);
        sum = series[series.length - 2] + series[series.length - 3];
    }

    return series;
}

// Example usage: Generate the series up to N = 50
'use strict'

const prompt = require('prompt-sync')();

let n = prompt('Enter the value of limit N for the series: ');

let series = generateSeries(n);
console.log(series.join(', '));
