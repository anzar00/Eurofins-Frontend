'use strict';

const prompt = require('prompt-sync')();

const limit = prompt('Enter the limt N of the series: ');

function generateSeries(limit) {
    let series = [800];
    let currentTerm = 800;
    let difference = 2;
  
    while (currentTerm <= limit) {
      currentTerm += difference;
      if (currentTerm > limit) break;
      series.push(currentTerm);
      difference += 2;
    }
  
    return series;
  }
  
  function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }
  
  function countSumsWithDigitOne(sums) {
    return sums.filter(sum => sum.toString().includes("1")).length;
  }
  
  let series = generateSeries(limit);
  let sumOfDigitsSeries = series.map(sumOfDigits);
  let count = countSumsWithDigitOne(sumOfDigitsSeries);
  
  console.log("Series:", series.join(" "));
  console.log("Sum of digits:", sumOfDigitsSeries.join(" "));
  console.log("The count of the sum numbers which have the digit 1 =", count);
  