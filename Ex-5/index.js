function evenOrOdd() {
    var num = document.getElementById("num").value;
    if (num % 2 == 0) {
        document.getElementById("result").innerHTML = "The number is even.";
    } else {
        document.getElementById("result").innerHTML = "The number is odd.";
    }
}