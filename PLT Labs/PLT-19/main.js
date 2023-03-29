// Write a program to store elements into a N * N matrix of integer. Display whether it is an identity matrix or not.

'use strict'

const prompt = require('prompt-sync')();
const n = prompt('Enter n: ');

let matrix = [];

for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = prompt(`Enter element: `);
    }
}

let isIdentity = true;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i == j && matrix[i][j] != 1) {
            isIdentity = false;
            break;
        }
        if (i != j && matrix[i][j] != 0) {
            isIdentity = false;
            break;
        }
    }
}

if (isIdentity) {
    console.log('The matrix is an identity matrix.');
} else {
    console.log('The matrix is not an identity matrix.');
}

// Print the matrix

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        process.stdout.write(matrix[i][j] + " ");
    }
    console.log();
}
