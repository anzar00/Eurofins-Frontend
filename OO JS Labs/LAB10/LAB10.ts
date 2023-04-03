import {restaurant} from  "./Required_TS_File/restaurant";
import {Customer} from  "./Required_TS_File/customer";
import {RegCustomer} from "./Required_TS_File/regcustomer";
import {order} from "./Required_TS_File/order";
import {item} from "./Required_TS_File/item";
import {orderitem} from "./Required_TS_File/orderitem";

//Create an object for company with name 'amazom'

var company = new restaurant('amazon');

//Create 4 items: 'Bag' with price of 500, 'Books' with price of 1000, 'pen' with price of 200 and box with price of 100.

var item1 : item;
var item2 : item;
var item3 : item;
var item4 : item;

item1 = new item(500,'bag');
item2 = new item(1000,'books');
item3 = new item(200,'pen');
item4 = new item(100,'box');


//Add The 4 items to the company 'Amazon'

company.item.push(item1);
company.item.push(item2);
company.item.push(item3);
company.item.push(item4);


//Create two orderitem object. One with 3 quantity of bag and other with 4 quantity of books

var orderitem1 : orderitem;
var orderitem2 : orderitem;

orderitem1 = new orderitem(3,[item1]);
orderitem2 = new orderitem(4,[item2]);

//Create an object of order and add the above two orderitem in it

var order1 = new order();

order1.setOrderItem(orderitem1);
order1.setOrderItem(orderitem2);

//Create another two orderitem object. One with 4 quantity of pen and other with 5 quantity of box.

var orderitem3 : orderitem;
var orderitem4 : orderitem;

orderitem3 = new orderitem(4,[item3]);
orderitem4 = new orderitem(5,[item4]);

//Create another object of order and add the above two orderitem in it

var order2 = new order();

order2.setOrderItem(orderitem3);
order2.setOrderItem(orderitem4);

//Create a new customer with name 'Shaurya'

var customer1 = new Customer('Shaurya');

//Create a new reg customer with name 'Agnihotri' which will get a discount of 10%

var customer2 = new RegCustomer('Agnihotri',10);

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

console.log('restaurant name is: '+company.getName());
for (let customer of company.getCustomer()) {
    if (customer instanceof Customer) {
        console.log('customer is: ' + customer.getName());
        console.log('customerid is: ' + customer.getcustomerId());
        for (let order of customer.getorder()) {
            console.log('orderid is: ' + order.getOrderid());
            for (let orderitem of order.getorderitem()) {
                console.log('ordered quantity of item : ' + orderitem.getquantity());
                for (let item of orderitem.getitem()) {
                    console.log('description(item' + ') is: ' + item.getdescription());
                    console.log('price of item' + ' is' + item.getprice());
                    console.log('iteamid for item' + ': ' + item.getitemId());
                }
            }
        }
    }
}
for(let customer of company.getCustomer()){
    if(customer instanceof RegCustomer){
        console.log('reg customer is: '+customer.getName());
        console.log('regcostomerid is: '+customer.getcustomerId());
        for(let order of customer.getorder()){
            console.log('regcustomer orderid :'+order.getOrderid());
            for(let orderitem of order.getorderitem()){
                console.log('ordered quantity of item :'  +orderitem.getquantity());
                for(let item of orderitem.getitem()){
                    console.log('description(item  in order '+order.getOrderid()+') is: '+item.getdescription());
                    console.log('price of item  is'+item.getprice());
                    console.log('iteamid for item : '+item.getitemId());
                }
            }
        }
    }
}



