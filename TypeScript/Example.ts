// Learning TypeScript

// Variable Decleration
var a = 10;

// Strictly Typed Variable

var b: number = 20;
var c: string = "Hello";

console.log(a);
console.log(b);
console.log(c);

var Name: String = "Anzar";
var Age: number = 23;
var Score: number = 100;
var value: any = "Excellent";

console.log(value);

value = 100;

console.log(value);

console.log(Name);

if (Score >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// Class Sum Example
export class sum {
    // Declaring and Initializing Variables
    num1: number = 10;
    num2: number = 20;
    sampleArray: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    i: number = 0;

    // Function to print Array
    printArray(): void {
        for (this.i = 0; this.i < this.sampleArray.length; this.i++) {
            {
                console.log(this.sampleArray[this.i]);
            }
        }
    }

    // Function to print sum
    printSum(): void {
        console.log(this.num1 + this.num2);
    }
}

var ClassSum = new sum();
console.log(ClassSum.printSum());
console.log(ClassSum.printArray());