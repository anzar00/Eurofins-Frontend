// Level 1
// Generate an array of 100 integers based on the given rules.

// Level 2
// Print all those numbers which are negative values and contain the digit 3 in them.
// Print the count of such numbers.

var numbers: number[] = [];
var count = 0;
var negativeNumbersWith3: number[] = [];

for (let i = 1; i <= 100; i++) {
    var multipleOfNine = i * 9;
    var lastTwoDigits = multipleOfNine % 100;

    var shouldNegate = Math.abs(lastTwoDigits % 10 - Math.floor(lastTwoDigits / 10)) === 3;

    var number = shouldNegate ? -multipleOfNine : multipleOfNine;
    numbers.push(number);

    if (shouldNegate && number.toString().includes("3")) {
        negativeNumbersWith3.push(number);
        count++;
    }
}

console.log(`Numbers satisfying the condition:`);
console.log(numbers);
console.log(`Count of negative numbers containing digit 3: ${count}`);
console.log(`Negative numbers containing digit 3: ${negativeNumbersWith3}`);


// Level 3
// Given that a is the array and { a[k],a[k+1] } represent a pair, 
// display all such pairs of numbers where a[k] - a[k+1]  is a prime number. Display the count of such pairs.

var pairs: number[][] = [];
var count = 0;

for (let i = 0; i < numbers.length - 1; i++) {
    var difference = Math.abs(numbers[i] - numbers[i + 1]);
    if (isPrime(difference)) {
        pairs.push([numbers[i], numbers[i + 1]]);
        count++;
    }
}

console.log(`Pairs of numbers where a[k] - a[k+1] is a prime number:`);
console.log(pairs);
console.log(`Count of such pairs: ${count}`);

function isPrime(number: number): boolean {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}