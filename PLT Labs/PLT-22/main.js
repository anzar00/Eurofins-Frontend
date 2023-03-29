function printStars(n) {
    for (var i = 1; i <= n; i++) {
        var stars = "";
        for (var j = 0; j < i; j++) {
            stars += "*";
        }
        console.log(stars);
    }
}


printStars(5);

