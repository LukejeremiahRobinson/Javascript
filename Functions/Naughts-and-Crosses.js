let space1 = "x"
let space2 = "x"
let space3 = "o"
let space4 = "o"
let space5 = "o"
let space6 = "o"
let space7 = "x"
let space8 = "x"
let space9 = "o"

console.log("-----------")
console.log(` ${space1} | ${space2} | ${space3}`)
console.log(`   |   |   `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space4} | ${space5} | ${space6} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(`   |   |   `)
console.log(` ${space7} | ${space8} | ${space9} `)
console.log("-----------")

if (space1 && space2 && space3 == "x") {
    console.log("You win")
}
else {
    console.log("You lose")
}
