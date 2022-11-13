const Person = function(fName,lastName,age){
    this.firstName = fName
    this.lastName = lastName
    this.age = age
 }
 
 const me1 = new Person("Vineesh","Chauhan",27)
 const me2 = new Person("Akanksha","Chauhan",32)
 console.log(me1)
 console.log(me2)
 console.log(Person.Object.prototype.hasOwnProperty('hasOwnProperty'))
//The constructor function helps to create unique JS objects.
//Now, functions helps to create all JS object created using constructor function to have same functions.
//So, all JS objects will inherit same functions. 

//Prototypal Inheritance is concept behind JS inheritance.
//Access constructor funtion and access prototype property.
console.log(Person.prototype)
//prototype is an object on which we want to put all properties/method which we want to share with all instances.
Person.prototype.getBio = function(){
    return `${this.firstName} ${this.lastName} age is ${this.age}`
}

//You can notice that we no longer need to pass the person object while calling getBio()
//The this inside getBio function will have access to instance on which getBio is called.
console.log(me1.getBio())
console.log(me2.getBio())

Person.prototype.setName = function(fullName){
    const nameArray = fullName.split(' ')
    this.firstName = nameArray[0]
    this.lastName = nameArray[1]
}
me1.setName('Saurabh Tomar')
console.log(me1.getBio())

//this
//arrow functions don't have access to this. so, if there is this in parent scope then they use it.
//but regular function have their won this. so if they are called without instance and try to access this,
//it breaks
