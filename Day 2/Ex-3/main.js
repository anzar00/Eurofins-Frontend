// JS Functions to demonstrate various events

// Function to demonstrate the onclick event
function clickMe() {
    alert("You clicked me!");
}

// Function to demonstrate the onmouseover event
function mouseOverMe() {
    alert("You moved your mouse over me!");
}

// Function to demonstrate the onmouseout event
function mouseOutMe() {
    alert("You moved your mouse out of me!");
}

// Function to demonstrate the onfocus event
function focusMe() {
    // Update the value of the input field
    document.querySelector("input").value = "Focused";
}

// Function to demonstrate the onblur event
function blurMe() {
    //alert("You blurred me!");
    document.querySelector("input").value = "Blured";
}

// Function to demonstrate the onchange event
function changeMe() {
    alert("You changed me!");
}

// Function to demonstrate the onsubmit event
function submitMe() {
    // Alert value of the input field having id sub
    alert("You submitted - " + document.getElementById("sub").value);
}

// Function to demonstrate the onreset event
function resetMe() {
    alert("You reset me!");
}

// Function to demonstrate the onselect event
function selectMe() {
    alert("You selected me!");
}

// Function to demonstrate the onkeydown event
function keyDownMe() {
    //alert("You pressed a key!");
    alert("You pressed a key! - " + event.key);
}

// Function to demonstrate the onkeyup event
function keyUpMe() {
    alert("You released a key!" + event.key);
}

// Function to demonstrate the onkeypress event
function keyPressMe() {
    alert("You pressed a key!" + event.key);
}

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "") {
        alert("Username must be filled out");
        return false;
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (username == "admin" && password == "admin") {
        alert("Login Successful");
        return true;
    } else {
        alert("Invalid Username or Password");
        return false;
    }
}