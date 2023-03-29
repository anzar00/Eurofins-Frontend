/* 
Accept the item code, description, qty and price of an item. Compute the total for the item. 

Accept the user’s choice. If the choice is ‘y’ then accept the next set of inputs for a new item and compute the total. 
In this manner, compute the grand total for all the items purchased by the customer. 

    a. If the grand total is more than Rs. 10,000/‐ then, the customer is allowed a discount of 10%.   
    b. If the grand total is less than Rs. 1,000/‐ and the customer chooses to pay by card, then a surcharge of 2.5% is levied on the grand total.   
    c. Display the grand total for the customer in number form and in words 

*/

'use strict';
const prompt = require('prompt-sync')();

function numberToWords(num) {
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  
    function convertToWords(n) {
      if (n < 10) return ones[n];
      if (n < 20) return teens[n - 10];
      if (n < 100) return tens[Math.floor(n / 10)] + " " + ones[n % 10];
      if (n < 1000) return ones[Math.floor(n / 100)] + " Hundred " + convertToWords(n % 100);
      if (n < 100000) return convertToWords(Math.floor(n / 1000)) + " Thousand " + convertToWords(n % 1000);
    }
  
    return convertToWords(num);
  }

let grandTotal = 0;
let userChoice = "y";

while (userChoice.toLowerCase() === "y") {
  const itemCode = prompt('Enter item code: ');
  const description = prompt('Enter description: ');
  const qty = Number(prompt('Enter quantity: '));
  const price = Number(prompt('Enter price: '));

  const itemTotal = qty * price;
  console.log(`Total for item ${itemCode}: ${itemTotal}`);
  grandTotal += itemTotal;

  userChoice = prompt('Do you want to add another item? (y/n): ');
}

if (grandTotal > 10000) {
  grandTotal *= 0.9;
} else if (grandTotal < 1000) {
  const payByCard = prompt('Do you want to pay by card? (y/n): ');
  if (payByCard.toLowerCase() === "y") {
    grandTotal *= 1.025;
  }
}

console.log(`Grand Total: ${grandTotal}`);
console.log(`Grand Total in words: ${numberToWords(grandTotal)}`);
