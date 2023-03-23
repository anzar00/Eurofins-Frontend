let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

let heads = 0;
let tails = 0;

function flipCoin() {
    return new Promise((resolve, reject) => {
        let i = Math.floor(Math.random() * 2);
        coin.style.animation = "none";
        if (i) {
            setTimeout(function () {
                coin.style.animation = "spin-heads 3s forwards";
                heads++;
                resolve("Heads");
            }, 100);
        }
        else {
            setTimeout(function () {
                coin.style.animation = "spin-tails 3s forwards";
                tails++;
                resolve("Tails");
            }, 100);
        }
        setTimeout(updateStats, 3000);
        disableButton();
    });
}

flipBtn.addEventListener("click", function () {
    flipCoin()
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
});

function updateStats() {
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}

function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", function () {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});
