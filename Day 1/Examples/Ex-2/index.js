// Description: Area of a triangle
// Illustrates: Functions and variables


let altitude = 10;
let base = 20;

function areaOfTriangle() {
    return (altitude * base) / 2;
}

console.log(areaOfTriangle());

function calculateArea() {
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var area = 0.5 * base * height;
    document.getElementById("result").innerHTML = "The area of the triangle is " + area + " square units.";
}