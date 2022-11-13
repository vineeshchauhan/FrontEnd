//Arrays Arrays are created using []
const notes = ['Note 1','Note 2','Note 3']

console.log(`You have notes for today ${notes}`)

//Add new element at the end
notes.push('Item 4')

console.log(`You have notes for today ${notes}`)

//remove element from the end
let item = notes.pop()
console.log(`Deleted item is ${item}`)
console.log(`You have notes for today ${notes}`)

//Add element in the start
console.log(`You have notes for today ${notes}`)
notes.unshift('Note 0')
console.log(`You have notes for today ${notes}`)

//delete item from start
let i = notes.shift()
console.log(`Deleted item is ${i}`)
console.log(`You have notes for today ${notes}`)

//Adding element in the middle of an array
notes.splice(0,1,'Note 1')//start from 0, delete 1 element and add new one
console.log(`You have notes for today ${notes}`)//Note 1,Note 2,Note 3

notes.splice(2,1,'Note 2.1')//start from 2, delete 1 element and add new one
console.log(`You have notes for today ${notes}`)//Note 1,Note 2,Note 2.1

notes.splice(1,0,'Item 1.1')
console.log(`You have notes for today ${notes}`)//Note 1,Item 1.1,Note 2,Note 2.1

//swap an item//update the value
notes[3] = 'Notes 2.2'
console.log(`You have notes for today ${notes}`)//Note 1,Item 1.1,Note 2,Note 2.2
