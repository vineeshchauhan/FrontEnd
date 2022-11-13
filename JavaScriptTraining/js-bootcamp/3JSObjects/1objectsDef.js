//Objects are used to store real world values in JS.
let object = {}; // It is an empty Object in JS
console.log(object) // {}

//Defining the Objects
let person = {
    name : 'Vineesh',
    age : 32,
    location : 'India'
}

//Accessing object and its values using dot notation.
console.log(`${person.name} is ${person.age} and he lives in ${person.location}`)

//Modifying object property
person.name = 'Akanksha'
person.age = 32
console.log(`${person.name} is ${person.age} and she lives in ${person.location}`)