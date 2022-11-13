//arrays forEach method takes function as argument. The function should describe what should be done
//with each element in array.
// function inside a function is called callback function. why ???
const todos = ['Morning Walk','Get some milk','Woke Up Bholu','Prepare Breakfast','Open Your Terminal']

console.log('List of todos ')
todos.forEach(function(item,index){
    console.log(`${index+1} : ${item}`)
})

console.log('List of todos ')
for(let i = 0; i < todos.length ; i++){
    console.log(`${i+1} : ${todos[i]}`)
}

