// Write TypeScript code for the N-base notation is a system for writing numbers that uses only n different symbols, 

// This symbols are the first n symbols from the given notation list below :-
// Decimal to n base notation are (0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:A,11:B and so on up to 35:Z).
// The function accept positive integer n and num Implement the function to calculate the n-base equivalent of num and return the same as a string


// Steps:
// 1) Divide the decimal number by n,treat the division as the integer division
// 2) Write the the remainder (in  n-base notation)
// 3) Divide the quotient again by n, Treat the division as integer division
// 4) Repeat step 2 and 3 until the quotient is 0
// 5)The n-base value is the sequence of the remainders from last to first


// Assumption:
// 1 < n < = 36


function decimalToNBase(n: number, num: number): string {
    if (n < 2 || n > 36) {
      throw new Error("Invalid base. Must be between 2 and 36.");
    }
    
    let quotient = num;
    let remainder = 0;
    let result = "";
    
    while (quotient !== 0) {
      remainder = quotient % n;
      quotient = Math.floor(quotient / n);
      if (remainder < 10) {
        result = remainder + result;
      } else {
        result = String.fromCharCode(remainder + 55) + result;
      }
    }
    
    return result;
  }
  
  console.log(decimalToNBase(12, 59)); 
  