let accnum = 50449921
let balance = 300
let pinnumber = 1122
let amounts = [
    "£200",
    "£300",
    "£400",
    "£500"
]

const checkpin = (pin)=>{
    if (pin == pinnumber){
        console.log(`Thank you for entering your pin.`)

            cashwithdraw (amount, balance)
}
    else {
        console.log("Wrong Pin.")
    }
}

checkpin (1122)
cashwithdraw (500)

const cashwithdraw = (amount, balance) =>{
    if (amounts<=balance){
        balance<=amounts 
        console.log(`Withdrawing £${amount} from account number ${accnum}. Your new balance is £${balance}`)
    }
    else {
        console.log("Not enough money in account")
    }
}
