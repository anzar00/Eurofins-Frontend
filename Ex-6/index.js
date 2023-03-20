function resultGenerator() {
    var name = document.getElementById("name").value;
    var sub1 = document.getElementById("sub1").value;
    var sub2 = document.getElementById("sub2").value;
    var sub3 = document.getElementById("sub3").value;
    var total = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);
    var avg = total / 3;
    var result = "";
    if (avg >= 60) {
        result = "1st Class";
    } else if (avg >= 50) {
        result = "2nd Class";
    } else if (avg >= 35) {
        result = "Pass Class";
    } else {
        result = "Fail";
    }
    document.getElementById("result").innerHTML = "Name: " + name + "<br>Sub1: " + sub1 + "<br>Sub2: " + sub2 + "<br>Sub3: " + sub3 + "<br>Total: " + total + "<br>Average: " + avg + "<br>Result: " + result;
}