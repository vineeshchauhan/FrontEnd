const person = function(){
}
let me = person()
console.log(me) //undefined

const Person1 = function(){
}
me = new Person1()
console.log(me) //person {}
//an empty object is returned. person {} is customer object type.
//Here we have created a constructor function with the help of new keyword.

//new operator does very important things.
//It creates new empty object for this instance.
//It gives access to this in constructor function. 
//here "this" refers to instance of person(me1, me2) which created person.
//so that we can set properties on them.
const Person = function(fName,lastName,age){
   this.firstName = fName
   this.lastName = lastName
   this.age = age
}

const me1 = new Person("Vineesh","Chauhan",27)
const me2 = new Person("Akanksha","Chauhan",32)
console.log(me1)
console.log(me2)

