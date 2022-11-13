const person = {
    name : '',
    age : '',
}

person.name = 'Vineesh'
person.age = 32

console.log(person.name)
console.log(person.age)

const employee = {
    //id
    set id(id){
        this._id = id
    },

    get id(){
        return this._id
    }

}

employee.id = 1
console.log(employee.id)







