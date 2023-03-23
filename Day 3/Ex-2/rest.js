// Demonstration of rest operator

function exa(a, b) {
    return a + b;
}

console.log(exa(1, 2))
console.log(exa(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

function newexa(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}

console.log(newexa(1, 2))
console.log(newexa(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Another Example
console.log();
function mul(...input) {
    let mul = 1;
    for (let i of input) {
        mul *= i;
    }
    return mul;
}

console.log(mul(1, 2))
console.log(mul(1, 2, 3))

// Another Example
console.log();
function myFunction(a, b, ...others) {
    console.log("a", a);
    console.log("b", b);
    console.log("others", others);
}

myFunction("one", "two", "three", "four", "five", "six");

// Another Example
console.log();
function newexa1(a,b, ...input) {
    console.log("a", a);
    console.log("b", b);
    console.log("input", input);

    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}

console.log(newexa1(1, 2))
console.log(newexa1(1, 2,3))
console.log(newexa1(1,2,3,4))