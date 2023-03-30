// 1
var header = document.getElementById("headerTitle");
header.style.backgroundColor = "yellow";
header.style.borderBottom = "solid 5px #000";

// 2
var items = document.getElementsByClassName("list-group-item");

for(var i=0; i<items.length; i++){
    if(items[i].textContent.includes("Veg")){
        //set colour to green
        items[i].style.color = "green";

    }
    else{
        //set colour to red
        items[i].style.color = "red";
    }
}

//3

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);


function addItem(ev){
    ev.preventDefault();

    var newItem = document.getElementById('newitem').value;

    //creare li element
    var li = document.createElement('li');
    //Add class
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));


    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger float-right btn-sm delete";

    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    //assigning price
    var price = document.createElement('span');
    price.className = "float-right";
    price.id = "price-item";
    price.style.marginRight = "100px";

    
    price.appendChild(document.createTextNode('180'));
    li.appendChild(price);
    
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// 4

var oddItems = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<oddItems.length; i++){
   oddItems[i].style.backgroundColor = "lightgray";
}

// 5

var itemPrices = document.querySelectorAll('#price-item');
var totalItem = document.querySelector('.total-item');

//Iterate through the price item and check if price is greater than or equal to 200.
for(var count=0; count<itemPrices.length; count++){
    if(parseInt(itemPrices[count].textContent)>=200){
        let finalPrice = parseInt(itemPrices[count].textContent) - (0.1*parseInt(itemPrices[count].textContent));
        
        itemPrices[count].textContent = finalPrice;
    }
}

totalItem.textContent = count; //Note: we are able to access 'var' outside its block

// 6 

var tipAmount = document.getElementById('tipAmount');
var counter = parseInt(tipAmount.textContent);

var add = (function () {
    //Write code here
    return function () {counter += 1; return counter;}
})();
  
function addTip(){
    tipAmount.innerHTML = add();
}

var subtract = (function () {
    //var counter = parseInt(tipAmount.textContent);
    return function () {counter -= 1; return counter;}
})();

  
function subtractTip(){
    tipAmount.innerHTML = subtract();
}

// 7

var priceItems = document.querySelectorAll('#price-item');

function priceDisplay(some){
    var totalAmount = document.getElementById('totalAmount');
    totalAmount.innerHTML = some;
}


function priceCalculation(priceItems, myCallback){
    var total = 0;
    for(var i=0; i<priceItems.length; i++){
        total += parseInt(priceItems[i].textContent);
    }

    //And the tip amount from id 'tipAmount' to the total. 

    var tipAmount = document.getElementById('tipAmount');
    var tip = parseInt(tipAmount.textContent);
    total += tip;

    //Use call Back functionality to pass the toatal amount.
    myCallback(total);
}


priceCalculation(priceItems,priceDisplay);


//8. [Promise] Use promise to show a warning message if item contain one or more Non-Veg Item

//Step1: Get all the items. (Note: Class name of li items is 'list-group-item').
//var items = 'Write code here'
var items = document.getElementsByClassName('list-group-item');

//Step2: Create the function displayItemMessage(someMsg) for displaying 
//the warning message in div with id 'warning-mess'.
//Write code here

function displayItemMessage(someMsg){
    var warningMess = document.getElementById('warning-mess');
    warningMess.innerHTML = someMsg;
}

//Step3: Create a promise where declare a boolean variable 'checkVeg'. Iterate through the items and if any item doesn't have "Veg" in it then set 'checkVeg' as false.
//Write code here

var promise = new Promise(function(resolve, reject){
    var checkVeg = true;
    for(var i=0; i<items.length; i++){
        if(!items[i].textContent.includes("Veg")){
            checkVeg = false;
        }
    }

    if(checkVeg){
        resolve("It doesnot contain any Non-Veg Item");
    }
    else{
        reject("Warning! It contains one or more Non-Veg Item");
    }
});

//Step4: If promise is fulfilled the pass "It doesnot contain any Non-Veg Item" to the function created in step2 otherwise pass error message "Warning! It contains one or more Non-Veg Item".
//Write code here

promise.then(function(successMsg){
    displayItemMessage(successMsg);
}).catch(function(errorMsg){
    displayItemMessage(errorMsg);
});