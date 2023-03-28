// Lab - 1
var message = "Welcome to Quick Food Restaurant";
console.log(message);
// Lab - 2
var customerID = 11102;
var customerName = "ABC";
console.log("Customer ID: " + customerID);
console.log("Customer Name: " + customerName);
// Lab - 3
function totalPrice(n1, n2) {
    return n1 + n2;
}
var itemPrice = 100;
var deliveryCharge = 50.80;
var total = totalPrice(itemPrice, deliveryCharge);
console.log("Total Price of the order is : Rs. ".concat(total));
