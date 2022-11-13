// Multiple Argument to Function with default value
let tipAmount = function(bill, tipPer = 10){
    return bill * tipPer/100
}

console.log('Tip is : '+tipAmount(0))
console.log('Tip is : '+tipAmount(undefined,20))
console.log('Tip is : '+tipAmount(10,20))
console.log('Tip is : '+tipAmount(100))

