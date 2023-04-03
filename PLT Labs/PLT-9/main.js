function hasDigitNine(num) {
    return num.toString().includes('9');
}

function generateSeries(N) {
    let count = 0;
    let series = [];

    for (let i = 1; i * i <= N; i++) {
        let squared = i * i;
        series.push(squared);

        if (hasDigitNine(squared)) {
            count++;
        }
    }

    return { series, count };
}

// Read input from the user
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

'use-strict'

const prompt = require('prompt-sync')();

const N = prompt('Enter the value of N: ');

const result = generateSeries(N);

console.log('Generated series:');
console.log(result.series.join(' '));
console.log('Count of the numbers which have the digit 9 in them:', result.count);

