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
// Lab - 10
var RestaurantType;
(function (RestaurantType) {
    RestaurantType[RestaurantType["Cafe"] = 0] = "Cafe";
    RestaurantType[RestaurantType["Restaurant"] = 1] = "Restaurant";
    RestaurantType[RestaurantType["FastFood"] = 2] = "FastFood";
    RestaurantType[RestaurantType["Bakery"] = 3] = "Bakery";
})(RestaurantType || (RestaurantType = {}));
// Add a new restaurant using the contract defined.
var Subway = {
    name: "Subway",
    address: "#123/A Avenue",
    phone: 9878987878,
    type: RestaurantType[RestaurantType.Cafe],
};
// Function to view the details of the restaurant
var RestaurantDetails = function (restaurant) {
    console.log("Name: ".concat(restaurant.name, " Address: ").concat(restaurant.address, " Phone: ").concat(restaurant.phone, " Type: ").concat(restaurant.type));
};
RestaurantDetails(Subway);
// Lab - 11
/*
Using the contract defined in the previous lab for restaurant information, we now have
a request to add two more restaurants MTR and Paradise which are of type Fast Food
Corner and Bistros respectively.
Tasks
1 . Create a list to store the information of MTR and Paradise restaurants using the
interface defined.
2. Push the previous Subway Restaurant information in this list.
3. Create a function to iterate through the list of restaurants using forEach and display
the details of each restaurant with the Restaurant ID (index+l )
*/
// Create a list to store the information of MTR and Paradise restaurants using the interface defined.
var resturantList = [
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
var GetResturantList = function () {
    resturantList.forEach(function (item, index) {
        console.log("Restaurant ID: ".concat(index + 1));
        RestaurantDetails(item);
    });
};
GetResturantList();
