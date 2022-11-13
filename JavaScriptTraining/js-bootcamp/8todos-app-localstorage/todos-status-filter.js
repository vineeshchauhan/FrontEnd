const statusTodosFilter = function(){
    todos = getJSObjFromStorage()
    const filteredTodos = todos.filter(function(todo){
            return !todo.isCompleted
    })
    if(filters.statusFilter){
        return filteredTodos
    }else{
        return todos
    }
}