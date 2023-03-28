// Lab - 1
var message: string = "Welcome to Quick Food Restaurant"

console.log(message)

// Lab - 2

let customerID: number = 11102;
let customerName: string = "ABC";

console.log("Customer ID: " + customerID);
console.log("Customer Name: " + customerName);

// Lab - 3

function totalPrice(n1: number,n2: number, showRes: boolean, order: string) {
    const total = n1 + n2;
    if(showRes) {
        console.log(`The Price of ${order} is Rs. ${total} including delivery charges of Rs. ${n2}`);
    }
    return total;
}

const itemPrice = 100;
const deliveryCharge = 50.80;
const showResult = true;
const order = "Chocolate Shake";
totalPrice(itemPrice, deliveryCharge, showResult, order);
