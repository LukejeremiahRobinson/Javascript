let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentcard = "Spade";

while (currentcard != "Heart") {
    console.log(currentcard);
    currentcard = cards[Math.floor(Math.random()*4)];
}

console.log(currentcard);
