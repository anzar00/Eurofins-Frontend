function add() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) + parseInt(num2);
    document.getElementById("operator").innerHTML = "+";
    document.getElementById("equals").innerHTML = "=";
    document.getElementById("result").value = result;
}
function subtract() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) - parseInt(num2);
    document.getElementById("operator").innerHTML = "-";
    document.getElementById("equals").innerHTML = "=";
    document.getElementById("result").value = result;
}
function multiply() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) * parseInt(num2);
    document.getElementById("operator").innerHTML = "&#215;";
    document.getElementById("equals").innerHTML = "=";
    document.getElementById("result").value = result;
}
function divide() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) / parseInt(num2);
    document.getElementById("operator").innerHTML = "&#247;";
    document.getElementById("equals").innerHTML = "=";
    document.getElementById("result").value = result;
}