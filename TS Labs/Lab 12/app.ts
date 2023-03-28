import { RestaurantInfo } from "./IResturantInfo";

enum RestaurantType {
    "Cafe",
    "Restaurant",
    "FastFood",
    "Bakery",
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