// Lab - 1
var message: string = "Welcome to Quick Food Restaurant"

console.log(message)

// Lab - 2

let customerID: number = 11102;
let customerName: string = "ABC";

console.log("Customer ID: " + customerID);
console.log("Customer Name: " + customerName);

// Lab - 3

function totalPrice(n1: number,n2: number, showRes: boolean) {
    if(showRes) {
        console.log(`Total Price of the order is : Rs. ${n1 + n2}`);
    }
    return n1 + n2;
}

const itemPrice = 100;
const deliveryCharge = 50.80;
const showResult = false;
totalPrice(itemPrice, deliveryCharge, showResult);
