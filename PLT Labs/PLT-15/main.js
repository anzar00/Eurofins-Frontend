// Write a code to generate this series 1,2,4,6,7,10,10,14....N

'use strict';
const prompt = require('prompt-sync')();

const n = Number(prompt('Enter the number of elements in the series: '));

function generateSeries(n) {
    const series1 = [];
    for (let i = 0; i < n; i++) {
        series1.push(1 + 3 * i);
    }
    const series2 = [];
    for (let i = 0; i < n; i++) {
        series2.push(2 + 4 * i);
    }
  
    const combinedSeries = [];
    for (let i = 0; i < n; i++) {
      combinedSeries.push(series1[i], series2[i]);
    }
  
    return combinedSeries.slice(0, n);
  }
  
  const result = generateSeries(n);
  console.log(result);
  




