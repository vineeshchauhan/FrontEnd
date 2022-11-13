///Objects in JS are passed as reference. If we modify any property of passed object in function,
// original object will also get modified.
let person = {
    name : 'Vineesh',
    age : 32,
}

let personProperties = function (personObj) {
    //Update the property of person
    personObj.name = 'Amit' ; // This will modify person object defined in start.
  //  return personObj
}

let pObj = personProperties(person)

console.log(`Person name in person object is : ${person.name}`)

//console.log(`Person name in personObj object is : ${pObj.name}`)

//How to avoid it. By creating a new object.
let perObj = pObj;// will not create new object

let personProp = function (person){
    return {
        name : 'Anki',
        age : person.age
    }
}
let personPropert = personProp(person)
console.log(personPropert.name)   
console.log(personPropert.age)
console.log(`Person name in person object is : ${person.name}`)
