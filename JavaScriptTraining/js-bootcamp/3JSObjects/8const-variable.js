// const variables.
const pie = 3.14;
//pie = 10 // illegal

//const functions

const person = {
    name : 'Vineesh',
    age : 32
}

//person = {} //illegal to reassign

person.age = 25 // perfectly legal. We are not reassign person to another object
                // but just updating the value which is perfectly legal to do.

console.log(person)