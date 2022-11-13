let name = 'Vineesh'

console.log(name) // Vineesh

let nameOne; // undefined as varibale value

console.log(nameOne) // undefined. undefined represet absence of value in JS.

let printName = function(name){ // undefined as function argument
    console.log(name);
}

let returnValue = printName()
console.log(returnValue) // undefined as return value

//Now set an initialied variable to undefined. It is used to clear the values.
name = undefined;

console.log(name) // name is set tio undefined.

// But it is best practice to not set varibale to undefined if programmer needs to clean/reset variable.
// JS has provided us with keyword null to reset/clean variable values
let lastName = 'Chauhan'
console.log(lastName)

lastName = null

console.log(lastName)

//=== checks content and content type both in comparision\
console.log (lastName === undefined) // false

//== checks only content
// both undefined and null represent absence of value so it returns true.

console.log (lastName == undefined) //true
console.log (null == undefined) //true



