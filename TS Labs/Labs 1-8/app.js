// Lab - 1
var message = "Welcome to Quick Food Restaurant";
console.log(message);
// Lab - 2
var customerID = 11102;
var customerName = "ABC";
console.log("Customer ID: " + customerID);
console.log("Customer Name: " + customerName);
// Lab - 3
function totalPrice(n1, n2, showRes, order) {
    var total = n1 + n2;
    if (showRes) {
        console.log("The Price of ".concat(order, " is Rs. ").concat(total, " including delivery charges of Rs. ").concat(n2));
    }
    return total;
}
var itemPrice = 100;
var deliveryCharge = 50.80;
var showResult = true;
var order = "Chocolate Shake";
totalPrice(itemPrice, deliveryCharge, showResult, order);
