// Lab - 12

// Create a module to store the interface restaurant information and display the restaurant details.

interface IRestaurantInfo {
    name: string;
    address: string;
    phone: number;
    type: string;
}

export { IRestaurantInfo as RestaurantInfo }