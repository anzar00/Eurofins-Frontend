// Simple Calculator with two input fields for Num 1 and Num 2 and four buttons for Addition, Subtraction, Multiplication and Division, using the ECMA 6 concepts, which includes, usage of let, const and arrow functions:
// 1. Create a function to add two numbers and display the result in the result input field

function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) + parseInt(num2);
    document.getElementById("operator").innerHTML = "+";
    document.getElementById("equals").innerHTML = "=";
    document.getElementById("result").value = result;
}

// 2. Create a function to subtract two numbers and display the result in the result input field

function subtract() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) - parseInt(num2);
    document.getElementById("operator").innerHTML = "-";
    document.getElementById("equals").innerHTML = "=";
    document.getElementById("result").value = result;
}

// 3. Create a function to multiply two numbers and display the result in the result input field

function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) * parseInt(num2);
    document.getElementById("operator").innerHTML = "&#215;";
    document.getElementById("equals").innerHTML = "=";
    document.getElementById("result").value = result;
}

// 4. Create a function to divide two numbers and display the result in the result input field

function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) / parseInt(num2);
    document.getElementById("operator").innerHTML = "&#247;";
    document.getElementById("equals").innerHTML = "=";
    document.getElementById("result").value = result;
}