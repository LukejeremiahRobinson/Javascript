let password = "hfhf"

if (password.length >= 8 && password.length <= 15) {
    console.log("This password is alright")
}
else if (password.length < 8) {
    console.log("Please enter 8 or more characters to a maximum of 15")
}
else if (password.length > 15) {
    console.log("Password to long please use less than 15 characters")
}