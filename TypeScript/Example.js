"use strict";
// Learning TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
// Variable Decleration
var a = 10;
// Strictly Typed Variable
var b = 20;
var c = "Hello";
console.log(a);
console.log(b);
console.log(c);
var Name = "Anzar";
var Age = 23;
var Score = 100;
var value = "Excellent";
console.log(value);
value = 100;
console.log(value);
console.log(Name);
if (Score >= 35) {
    console.log("Pass");
}
else {
    console.log("Fail");
}
// Class Sum Example
var sum = /** @class */ (function () {
    function sum() {
        // Declaring and Initializing Variables
        this.num1 = 10;
        this.num2 = 20;
        this.sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.i = 0;
    }
    // Function to print Array
    sum.prototype.printArray = function () {
        for (this.i = 0; this.i < this.sampleArray.length; this.i++) {
            {
                console.log(this.sampleArray[this.i]);
            }
        }
    };
    // Function to print sum
    sum.prototype.printSum = function () {
        console.log(this.num1 + this.num2);
    };
    return sum;
}());
exports.sum = sum;
var ClassSum = new sum();
ClassSum.printSum();
ClassSum.printArray();
