//  Demonstration of spread operator

let arr1 = [1, 2, 3, 'abc', 5];
let arr2 = [6, 7, 8, 9, 10];

let arr = [...arr1, ...arr2];

console.log(arr);