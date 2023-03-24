// Validate myForm
function validateForm() {
    // Form has to be validated before it is submitted

    // Get the value of the email field
    var email = document.forms["myForm"]["inputEmail3"].value;
    // Get the value of the password field
    var password = document.forms["myForm"]["inputPassword3"].value;

    // Check if the email field is empty
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    // Check if the password field is empty
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }

    // Check if the email field is valid
    if (email.indexOf("@") == -1) {
        alert("Email must be valid");
        return false;
    }

    // Check if the password field is valid
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }

    // Check if the password field is valid
    if (password.length > 16) {
        alert("Password must be less than 16 characters");
        return false;
    }

    // Check Checkbox
    var checkbox = document.getElementById('gridCheck1');
    if (!checkbox.checked) {
        alert("Must check the checkbox");
        return false;
    }

    // If all the validations are passed, submit the form
    confirm('Success!')
    return true;
}