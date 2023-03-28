// Lab - 1
var message = "Welcome to Quick Food Restaurant";
console.log(message);
// Lab - 2
var customerID = 11102;
var customerName = "ABC";
console.log("Customer ID: " + customerID);
console.log("Customer Name: " + customerName);
// Lab - 3 - 7
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
// Lab - 8
var foodItem = {
    itemId: 1,
    itemName: "Chocolate Shake",
    itemPrice: 100,
    itemCategory: "Shakes",
};
console.log(foodItem);
// console.log(foodItem.itemId);
// Lab - 9
var foodItems = ["Sandwich", "Pizza", "Pasta", "Salad", "Pancake", "Rice", "Icecream"];
foodItems.forEach(function (item, index) {
    console.log("".concat(index + 1, ". ").concat(item));
});
