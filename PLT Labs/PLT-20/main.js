// Write a program to store elements into a N * N matrix of integer. Display whether it is a symmetric matrix or not

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

let isSymmetric = true;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (matrix[i][j] != matrix[j][i]) {
            isSymmetric = false;
            break;
        }
    }
}

if (isSymmetric) {
    console.log('The matrix is a symmetric matrix.');
}
else {
    console.log('The matrix is not a symmetric matrix.');
}

// Print the matrix

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        process.stdout.write(matrix[i][j] + " ");
    }
    console.log();
}

