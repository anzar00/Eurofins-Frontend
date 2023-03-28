
function loadSeries() {
    // Take n from html
    var n = document.getElementsByName("n")[0].value;

    // array to store series
    var series = [];

    for (var i = 1; i <= n; i++) {
        console.log(i * i * 4);
        series.push(i * i * 4);
    }

    // Display series
    document.getElementById("series").innerHTML = series;

    return false;

}