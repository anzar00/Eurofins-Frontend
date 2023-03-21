function validateForm() {
    let name = document.forms["regForm"]["name"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    let email = document.forms["regForm"]["email"].value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    else if (!email.includes("@")) {
        alert("Email must contain @");
        return false;
    }
    else if (email.indexOf("@") == 0) {
        alert("Email must contain at least one character before @");
        return false;
    }
}