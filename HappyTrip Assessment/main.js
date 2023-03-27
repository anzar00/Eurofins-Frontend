// Store the flight details in an object and pass to the payment page
function storeFlightDetails() {
    var flightDetails = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        dob: document.getElementById("dob").value,
        departure: document.getElementById("departure").value,
        arrival: document.getElementById("arrival").value,
        from: document.getElementById("from").value,
        to: document.getElementById("to").value
    };
    localStorage.setItem("flightDetails", JSON.stringify(flightDetails));
    window.location.href = "flights.html";
}

// Load the flight details from the local storage and display it 
function loadFlightDetails() {
    var flightDetails = JSON.parse(localStorage.getItem("flightDetails"));
    document.getElementById("name").value = flightDetails.name;
    document.getElementById("number").value = flightDetails.number;
    document.getElementById("dob").value = flightDetails.dob;
    document.getElementById("departure").value = flightDetails.departure;
    document.getElementById("arrival").value = flightDetails.arrival;
    document.getElementById("from").value = flightDetails.from;
    document.getElementById("to").value = flightDetails.to;
}

// Validate the payment form
function validateForm() {
    var name = document.forms["payForm"]["name"].value;
    var number = document.forms["payForm"]["number"].value;
    var expiry = document.forms["payForm"]["expiry"].value;
    var cvv = document.forms["payForm"]["cvv"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (number == "") {
        alert("Card Number must be filled out");
        return false;
    }
    if (expiry == "") {
        alert("Expiry date must be filled out");
        return false;
    }
    // card number should be 16 digits
    if (number.length != 16) {
        alert("Card number should be 16 digits");
        return false;
    }
    if (cvv == "") {
        alert("CVV must be filled out");
        return false;
    }

    // cvv should be 3 digits
    if (cvv.length != 3) {
        alert("CVV should be 3 digits");
        return false;
    }

    // expiry date should be in the format MM/YY
    if (expiry.length != 7) {
        alert("Expiry date should be in the format MM/YYYY");
        return false;
    }

    // expiry MM should be between 01 and 12
    var expiryMM = expiry.substring(0, 2);
    if (expiryMM < 1 || expiryMM > 12) {
        alert("Expiry month should be between 01 and 12");
        return false;
    }

    // expiry YYYY should be greater or equal to current year
    var expiryYY = expiry.substring(3, 7); 
    var currentYear = new Date().getFullYear();
    if (expiryYY < currentYear) {
        alert("Expiry year should be greater or equal to current year");
        return false;
    }

    alert("Payment Successful");
}