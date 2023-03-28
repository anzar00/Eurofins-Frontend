/*
1 . Create a namespace 'PriceCalculator'
2. Create a function OrderPrice, which accepts the order amount and the discount
amount, and returns the final order price.
3. Import the namespace in the main file and display the final order bill.
*/

namespace PriceCalculator {
    export function OrderPrice(orderAmount: number, discountAmount: number): number {
        return orderAmount - discountAmount;
    }
}