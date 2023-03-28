"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
