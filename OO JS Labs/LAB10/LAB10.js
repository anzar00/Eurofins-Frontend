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
//Create another two orderitem object. One with 4 quantity of pen and other with 5 quantity of box.
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
var customer2 = new regcustomer_1.RegCustomer('Agnihotri', 10);
//Add order1 for customer 'Shaurya'
customer1.setOrder(order1);
//Add order2 for the reg customer 'Agnihotri'
customer2.setOrder(order2);
//Push both the customer in 'amazon' company
company.customer.push(customer1);
company.customer.push(customer2);
//Print all the details of the customer and orders as shown below:
// restaurant name is: amazon
// customer is: charan
// customerid is: 1
// orderid is: 1
// ordered quantity of item1: 3 
// ordered quantity of item2: 4 
// description(item1) is:  bag  
// description(item2) is:  books
// price of item1 is500
// price of item2 is1000
// iteamid for item1: 1
// iteamid for item2: 2
// reg customer is: satya
// regcostomerid is: 2
// regcustomer orderid :2
// ordered quantity: 4
// ordered quantity: 5
// description(item1 in order2) is:  pen
// description(item2 in order2) is:  box
// price of item3 is200
// price of item4 is100
// iteamid for item3: 3
// iteamid for item4: 4
console.log('restaurant name is: ' + company.getName());
for (var _i = 0, _a = company.getCustomer(); _i < _a.length; _i++) {
    var customer = _a[_i];
    if (customer instanceof customer_1.Customer) {
        console.log('customer is: ' + customer.getName());
        console.log('customerid is: ' + customer.getcustomerId());
        for (var _b = 0, _c = customer.getorder(); _b < _c.length; _b++) {
            var order_2 = _c[_b];
            console.log('orderid is: ' + order_2.getOrderid());
            for (var _d = 0, _e = order_2.getorderitem(); _d < _e.length; _d++) {
                var orderitem_2 = _e[_d];
                console.log('ordered quantity of item : ' + orderitem_2.getquantity());
                for (var _f = 0, _g = orderitem_2.getitem(); _f < _g.length; _f++) {
                    var item_2 = _g[_f];
                    console.log('description(item' + ') is: ' + item_2.getdescription());
                    console.log('price of item' + ' is' + item_2.getprice());
                    console.log('iteamid for item' + ': ' + item_2.getitemId());
                }
            }
        }
    }
}
for (var _h = 0, _j = company.getCustomer(); _h < _j.length; _h++) {
    var customer = _j[_h];
    if (customer instanceof regcustomer_1.RegCustomer) {
        console.log('reg customer is: ' + customer.getName());
        console.log('regcostomerid is: ' + customer.getcustomerId());
        for (var _k = 0, _l = customer.getorder(); _k < _l.length; _k++) {
            var order_3 = _l[_k];
            console.log('regcustomer orderid :' + order_3.getOrderid());
            for (var _m = 0, _o = order_3.getorderitem(); _m < _o.length; _m++) {
                var orderitem_3 = _o[_m];
                console.log('ordered quantity of item :' + orderitem_3.getquantity());
                for (var _p = 0, _q = orderitem_3.getitem(); _p < _q.length; _p++) {
                    var item_3 = _q[_p];
                    console.log('description(item  in order ' + order_3.getOrderid() + ') is: ' + item_3.getdescription());
                    console.log('price of item  is' + item_3.getprice());
                    console.log('iteamid for item : ' + item_3.getitemId());
                }
            }
        }
    }
}
