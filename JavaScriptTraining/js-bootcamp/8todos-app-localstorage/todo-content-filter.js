const contentTodosFilter = function(){
    todos = getJSObjFromStorage(key)
    const filteredTodos = todos.filter(function(todo){
        return todo.task.toLowerCase().includes(filters.textFilter.toLowerCase())
    })
    return filteredTodos;
}