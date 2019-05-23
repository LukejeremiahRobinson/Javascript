let time = 20
let placeOfWork = "Manchester"
let drivingToWork = "On bike"
let townOfHome = "Oldham"

if (time == 7 && townOfHome == "Oldham") {
    console.log("I'm At Home")
}
else if (time == 8 && drivingToWork == "On bike") {
    console.log("Im commuting to work")
}
else if (time == 9 && placeOfWork == "Manchester") {
    console.log("Im at work")
}
else if (time >=10 && time <=17 && placeOfWork == "Manchester" ) {
    console.log("Im in work")
}
else if (time ==18 && drivingToWork == "On bike") {
    console.log("Im Commuting from work")
} 
else if (time ==19 && townOfHome == "Oldham") {
    console.log("Im at home")
}
else if (time >=20 && time <=24 && townOfHome == "Oldham") {
    console.log("Im at home in bed")
}
else {
    console.log("Random time number")
}