// Import the namespace
/// <reference path="./PriceCalculator.ts" />

// Get total order amount from price calculator
let totalOrderAmount = PriceCalculator.OrderPrice(100, 10);

// Display the total order amount
console.log(`Total Order Amount: ${totalOrderAmount}`);