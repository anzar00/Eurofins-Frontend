'use-strict'

const prompt = require('prompt-sync')();

const n = prompt('Enter the number of rows: ');


function generatePattern(n) {
    let a = 1
    let sign = 1;
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            let number = a * a * sign;
            row += number + ' ';
            a += 1;
            sign *= -1;
        }
        console.log(row.trim());
    }
}

generatePattern(n);


