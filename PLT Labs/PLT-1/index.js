// Write a program to accept principle,rate of interest and time  from HTML and calculate simple interest and display the same.

function calculate(){
    var principle = document.getElementById("principle").value;
    var rate = document.getElementById("rate").value;
    var time = document.getElementById("time").value;
    var simpleInterest = (principle * rate * time) / 100;
    
    document.getElementById("result").innerHTML = "Simple Interest is " + simpleInterest;
    console.log("Simple Interest is " + simpleInterest);
}



