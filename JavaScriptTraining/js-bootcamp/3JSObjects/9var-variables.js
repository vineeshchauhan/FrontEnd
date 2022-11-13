//1. same name variable can be created with var
var name = 'Vineesh'
let lastName = 'Chauhan'

var name = 'Amit'// perfectly fine
//let lastName 'Singh' // not fine.

console.log(name) // Amit will be printed

//2. var has function scope. let and const has block scopr.

let print = function(){
    if(true){
    var fName = 'Vineesh'
    let lName = 'Chauhan'
    
    console.log(fName) //legal
    console.log(lName)  //legal
    }
    console.log(fName) //legal var is function scope variable.  
   // console.log(lName) //illegal let is block scope variable.
}
//console.log(fName) //illegal var is function scope variable.
print()

//var variables declaration gets hoisted to the top.
//console.log(country)
//let country = 10 // errot in line 26
var country = 10 // no error in line 26, but will print undefined.
///Actual program will look like
//var country
//console.log(country)
//country = 10






