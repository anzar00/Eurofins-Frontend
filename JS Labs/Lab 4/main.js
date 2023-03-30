function validateForm() {
    var name = document.forms["register"]["name"].value;
    var password = document.forms["register"]["password"].value;
    var confirmPassword = document.forms["register"]["confirm-password"].value;
    var sex = document.forms["register"]["sex"].value;
    var msg = document.getElementById("msg");

    if (name == "") {
        msg.innerHTML = "Name is required";
        msg.style.color = "red";
        return false;
    }

    if (password == "") {
        msg.innerHTML = "Password is required";
        msg.style.color = "red";
        return false;
    }

    if (confirmPassword == "") {
        msg.innerHTML = "Confirm password is required";
        msg.style.color = "red";
        return false;
    }

    if (password != confirmPassword) {
        msg.innerHTML = "Password and Confirm Password does not match";
        msg.style.color = "red";
        return false;
    }

    if (sex == "") {
        msg.innerHTML = "Choose Sex";
        msg.style.color = "red";
        return false;
    }
    
    redirect();
}

function redirect(){
    window.location.href = "success.html";
}

function showPassword() {
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var passwordStrength = document.getElementById("password-strength");

    if (password.length < 6) {
        passwordStrength.innerHTML = "Weak";
        passwordStrength.style.color = "red";
    } else if (password.length < 8) {
        passwordStrength.innerHTML = "Medium";
        passwordStrength.style.color = "orange";
    } else {
        passwordStrength.innerHTML = "Strong";
        passwordStrength.style.color = "green";
    }
}

function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var passwordMatch = document.getElementById("password-match");

    if (password != confirmPassword) {
        passwordMatch.innerHTML = "Password not match";
        passwordMatch.style.color = "red";
    } else {
        passwordMatch.innerHTML = "Password match";
        passwordMatch.style.color = "green";
    }
}

function loadGender() {
    var sex = document.forms["register"]["sex"].value;
    if (sex == 'Male') {
        document.getElementById("gender-label").innerHTML = "&male;"
    }
    else if (sex == 'Female') {
        document.getElementById("gender-label").innerHTML = "&female;"
    }
    else
        document.getElementById("gender-label").innerHTML = ""
}