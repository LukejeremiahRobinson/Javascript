let films = [
    "The Pokemon Movie",
    "Harry Potter",
    "Ghostbusters",
    "Happy feet",
    "IT"
]
let currentfilm = "Harry potter"

const filmcheck = (film) => {
    if (film == "Ghostbusters") {
        console.log("Yay It's Ghostbusters")
    }
    else {
        console.log("booo, we want Ghostbusters")
    }
}

console.log("lets check the third film")

filmcheck(films[2])

while (currentfilm != "Ghostbusters") {
    console.log(currentfilm);
    filmcheck (currentfilm)
    currentfilm= films [Math.floor (Math.random()*5)]
}
console.log(`Finally, ${currentfilm}!`)

