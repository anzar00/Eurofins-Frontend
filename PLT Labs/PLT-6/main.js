// Write a JS code to display the series 1, 3, 7, 13, 21, 43, 57, 73, 91, 111, 157, 183, 211 .... N

'use strict';
const prompt = require('prompt-sync')();
const n = prompt('Enter N the limit for the series: ');


function generateSeries(limit) {
  let series = [];
  let i = 2;
  let j = 1;

  while (j <= limit) {
    series.push(j);

    if (series.length >= 5 && series.length % 5 === 0) {
      j += i;
      i += 2;
    }

    j += i;
    i += 2;
  }

  return series;
}

const series = generateSeries(n);
console.log("Series:", series.join(", "));
