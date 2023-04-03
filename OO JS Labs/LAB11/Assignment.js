"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restaurant_1 = require("./Required_TS_File/restaurant");
var customer_1 = require("./Required_TS_File/customer");
var regcustomer_1 = require("./Required_TS_File/regcustomer");
var order_1 = require("./Required_TS_File/order");
var item_1 = require("./Required_TS_File/item");
var orderitem_1 = require("./Required_TS_File/orderitem");
//Create an object for company with name 'amazom'
var company = new restaurant_1.restaurant('amazon');
//Create 4 items: 'Bag' with price of 500, 'Books' with price of 1000, 'pen' with price of 200 and box with price of 100.
var item1;
var item2;
var item3;
var item4;
item1 = new item_1.item(500, 'bag');
item2 = new item_1.item(1000, 'books');
item3 = new item_1.item(200, 'pen');
item4 = new item_1.item(100, 'box');
//Add The 4 items to the company 'Amazon'
company.item.push(item1);
company.item.push(item2);
company.item.push(item3);
company.item.push(item4);
//Create two orderitem object. One with 3 quantity of bag and other with 4 quantity of books
var orderitem1;
var orderitem2;
orderitem1 = new orderitem_1.orderitem(3, [item1]);
orderitem2 = new orderitem_1.orderitem(4, [item2]);
//Create an object of order and add the above two orderitem in it
var order1 = new order_1.order();
order1.setOrderItem(orderitem1);
order1.setOrderItem(orderitem2);
//Create anither two orderitem object. One with 4 quantity of pen and other with 5 quantity of box.
var orderitem3;
var orderitem4;
orderitem3 = new orderitem_1.orderitem(4, [item3]);
orderitem4 = new orderitem_1.orderitem(5, [item4]);
//Create another object of order and add the above two orderitem in it
var order2 = new order_1.order();
order2.setOrderItem(orderitem3);
order2.setOrderItem(orderitem4);
//Create a new customer with name 'Shaurya'
var customer1 = new customer_1.Customer('Shaurya');
//Create a new reg customer with name 'Agnihotri' which will get a discount of 10%
var regcustomer = new regcustomer_1.RegCustomer('Agnihotri', 10);
//Add order1 for customer 'Shaurya'
customer1.setOrder(order1);
//Add order2 for the reg customer 'Agnihotri'
regcustomer.setOrder(order2);
//Push both the customer in 'amazon' company
company.customer.push(customer1);
company.customer.push(regcustomer);
//Assignment
//Get all the customers in 'amazon' company
console.log("All the customers in amazon company are: ");
for (var i = 0; i < company.customer.length; i++) {
    console.log((i + 1) + ". " + company.customer[i].getName());
}
//Get all the items available in 'amazon' company
console.log("\nAll the items available in amazon company are: ");
for (var i = 0; i < company.item.length; i++) {
    console.log((i + 1) + ". " + company.getitem()[i].getdescription());
}
//Get the total quantity ordered for each item from the company with the total price
console.log("\nTotal quantity ordered for each item from the company with the total price: ");
console.log("\nItem Name \t Quantity \t Total Price");
for (var i = 0; i < company.customer.length; i++) {
    for (var j = 0; j < company.customer[i].order.length; j++) {
        for (var k = 0; k < company.customer[i].order[j].orderitem.length; k++) {
            for (var l = 0; l < company.customer[i].order[j].orderitem[k].item.length; l++) {
                console.log(company.customer[i].order[j].orderitem[k].item[l].getdescription() + " \t\t " + company.customer[i].order[j].orderitem[k].quantity + " \t\t " + company.customer[i].order[j].orderitem[k].totalprice);
            }
        }
    }
}
//Get the nteworth of the company
console.log("\nNetworth of the company is: ");
console.log(company.gettotaolworthoforders());
