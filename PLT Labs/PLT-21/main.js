// Write a program to store elements into a M * N matrix of integer. Display the matrix and its transpose

'use strict'
const prompt = require('prompt-sync')();

const m = prompt('Enter m: ');
const n = prompt('Enter n: ');

let matrix = [];

for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = prompt(`Enter element: `);
    }
}

// Print the matrix
console.log('The matrix is: ');
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        process.stdout.write(matrix[i][j] + " ");
    }
    console.log();
}

// Print the transpose of the matrix
console.log('The transpose of the matrix is: ');
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        process.stdout.write(matrix[j][i] + " ");
    }
    console.log();
}

