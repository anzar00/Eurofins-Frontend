// Lab - 1
var message: string = "Welcome to Quick Food Restaurant"

console.log(message)

// Lab - 2

let customerID: number = 11102;
let customerName: string = "ABC";

console.log("Customer ID: " + customerID);
console.log("Customer Name: " + customerName);

// Lab - 3 - 7

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

// Lab - 8

const foodItem = {
    itemId: 1,
    itemName: "Chocolate Shake",
    itemPrice: 100,
    itemCategory: "Shakes",
};

console.log(foodItem);
// console.log(foodItem.itemId);

// Lab - 9

const foodItems = ["Sandwich", "Pizza", "Pasta", "Salad", "Pancake", "Rice", "Icecream"];

foodItems.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

// Lab - 10

enum RestaurantType {
    "Cafe",
    "Restaurant",
    "FastFood",
    "Bakery",
}

// Create an interface for Restaurant Info with Name(string), Address(string), Phone(number), Type(string) as the contract.
interface RestaurantInfo {
    name: string;
    address: string;
    phone: number;
    type: string;
}

// Add a new restaurant using the contract defined.
let Subway: RestaurantInfo = {
    name: "Subway",
    address: "#123/A Avenue",
    phone: 9878987878,
    type: RestaurantType[RestaurantType.Cafe],
};

// Function to view the details of the restaurant
let RestaurantDetails = (restaurant) => {
    console.log(`Name: ${restaurant.name} Address: ${restaurant.address} Phone: ${restaurant.phone} Type: ${restaurant.type}`);
}

RestaurantDetails(Subway);

// Lab - 11

// Create a list to store the information of MTR and Paradise restaurants using the interface defined.

let resturantList: RestaurantInfo[] = [
    {
        name: "MTR",
        address: "#123/A Avenue",
        phone: 9878987878,
        type: RestaurantType[RestaurantType.FastFood],
    },
    {
        name: "Paradise",
        address: "#123/A Avenue",
        phone: 9878987878,
        type: RestaurantType[RestaurantType.Restaurant],
    },
];

// Push the previous Subway Restaurant information in this list.

resturantList.push(Subway);

// Create a function to iterate through the list of restaurants using forEach and display the details of each restaurant with the Restaurant ID (index+l )

let GetResturantList = () => {
    resturantList.forEach((item, index) => {
        console.log(`Restaurant ID: ${index + 1}`);
        RestaurantDetails(item);
    });
}

GetResturantList();




