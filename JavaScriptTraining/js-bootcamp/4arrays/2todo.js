const todos = ['Morning Walk','Get some milk','Woke Up Bholu','Prepare Breakfast','Open Your Terminal']

console.log(`You have list of to dos tomorrow ${todos}`)
//Delete 3rd item
todos.splice(2,1)
console.log(`You have list of to dos tomorrow ${todos}`)

//Add new item on the end
todos.push('Check Your Reminders')
console.log(`You have list of to dos tomorrow ${todos}`)

//Remove first item from the list
todos.shift()
console.log(`You have list of to dos tomorrow ${todos}`)