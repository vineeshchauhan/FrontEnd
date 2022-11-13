const removeItem = function(id){
    const index = todos.findIndex(function(todo){
        return todo.id === id
    })
    todos.splice(index,1)
    setJSObjToStorage(todos)
}

const updateItem = function(id,todo){
    const index = todos.findIndex(function(todo){
        return todo.id === id
    })
    todos.splice(index,1,todo)
    setJSObjToStorage(todos)
}