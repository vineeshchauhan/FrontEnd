const todos = [{
    title : 'Health',
    body : 'Excercise daily'
},{
    title : 'Wealth',
    body : 'Save and Invest'
},{
    title : 'Career',
    body : 'Continue learing'
},{
    title : 'Family',
    body : 'All Set'
}]
//returns -1. the Index of function uses ==== to find the match. 
//=== is only true if they both side refers to save object.
//Index of does not take function as argument.
console.log(todos.indexOf({
    title : 'Health',
    body : 'Excercise daily'
}))

//findIndex
//findIndex takes function as argument and run that function for each item in array
// until some contidion is met.
console.log(todos.findIndex(function(item){
        return item.title === 'Career'
}))

//findIndex
let findItem = function (todos,itemTitle){
    let index = todos.findIndex(function(i){
        return i.title === itemTitle
    })
    return todos[index]
}
console.log(findItem(todos,'Family'))

//find() return item not just the index

let findItem1 = function(todos,itemTitle){
    let item = todos.find(function(i){
        return i.title === itemTitle
    })
    return item
}

console.log(findItem1(todos,'Family'))

console.log('Delete starts here')
//delete item from the array
//first get the index
let findIndex = function(todos,itemTitle){
    let index = todos.findIndex(function(i){
        return i.title === itemTitle
    })
    return index;
}
//use splice to delete an item
//let ind = findIndex(todos,'Career')
console.log(todos)
let deleteItem = function(array,item){ 
    let ind = findIndex(array,item)
    todos.splice(ind,1)
    console.log(todos)
}
deleteItem(todos,'Wealth');
//console.log(todos)
//todos.splice(ind,1)
//console.log(todos)