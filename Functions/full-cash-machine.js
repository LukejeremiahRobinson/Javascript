let accnum = 50449921
let balance = 300
let pinnumber = 1122
let amounts = [
    "£200",
    "£300",
    "£400",
    "£500"
]
    
let card = [
"master",
"visa",
] 

const checkPin = (amount, accnum, pin)=>{
    if (pin == pinnumber){
        console.log(`Thank you for entering your pin.
        Your remaining balance is £${balance}
        Please pick an amount you want to withdraw.
        Your opions are here ${amounts}`)
        
        cashWithdrawl(amount, accnum)
    }
    else{
        console.log("Wrong Pin")
    }
}

const cashWithdrawl = (amount, accnum) => {
    if (amount <= balance) {
        balance -= amount
        console.log(`Withdrawing £${amount} from account number ${accnum}. Your new balance is £${balance}`)
    }
    else {
        console.log("Not enough money in account")
    }
            
}

checkPin(300, accnum, 1122);