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


//5. [var/let] For all the items whose price is greater than or equal to 200 add the discount of 10% to the price. And display the total number of item ordered

//Step1: Use 'queryslector' to get the item price (note: id is 'price-item') 
//and to get the span for displaying total number of items (note: class name is '.total-item').
//var itemPrices = 
//var totalItem = 

var itemPrices = document.querySelectorAll('#price-item');
var totalItem = document.querySelector('.total-item');

//Iterate through the price item and check if price is greater than or equal to 200.
for(var count=0; count<itemPrices.length; count++){
    if(parseInt(itemPrices[count].textContent)>=200){
        //Step2: If yes, then give a discount of 10%. (Item final price = Earlier Price - (0.1*Earlier Price)).
        //let finalPrice = 'write the code here'
        let finalPrice = parseInt(itemPrices[count].textContent) - (0.1*parseInt(itemPrices[count].textContent));
        
        //Step3: Change the ealier price with the new price.
        //write code here
        itemPrices[count].textContent = finalPrice;
    }
}

totalItem.textContent = count; //Note: we are able to access 'var' outside its block