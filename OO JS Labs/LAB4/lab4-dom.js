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
//4. [DOM] Use query selector to change to the background of odd place items as lightgray

//Step1: Get all the odd place items in variable 'oddItems' in Added Items using querySelector.
//Note the li class name of items is 'list-group-item'

var oddItems = document.querySelectorAll('li:nth-child(odd)');

//Step2: Iterate through above list and set the background color as 'lightgray'.
for(var i=0; i<oddItems.length; i++){
   oddItems[i].style.backgroundColor = "lightgray";
}

