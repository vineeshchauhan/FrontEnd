let autoTipMessage = function(bill, tip = .2){
    tipAmount = bill*tip;
    return `A ${tip*100}% on $${bill} bill will be $${tipAmount}`;
}

console.log(autoTipMessage(100))

console.log(autoTipMessage(100,.25))
