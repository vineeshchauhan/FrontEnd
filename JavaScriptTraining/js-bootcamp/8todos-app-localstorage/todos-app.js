//All js files share same global namespace so key and todos will be available
//in all js files
const key = 'todos'
let todos = getJSObjFromStorage()
render()

const filters = {
    textFilter : '',
    statusFilter : false
}
document.querySelector('#note-add-form').addEventListener('submit',function(e){
    e.preventDefault()
    const value = e.target.elements.todoName.value
    const todoObj = {
        id : uuidv4(),
        task : value,
        isCompleted : false
    }
    todos = getJSObjFromStorage()
    //Check for duplicate
    let isExist = false
    if(todos != null && todos.length > 0){
        todos.forEach(function(todo){
            if(todo.task.toLowerCase().includes(todoObj.task.toLowerCase())){
                isExist = true
            }
        })
    }else{
        todos = []
    }
    if(!isExist){
    todos.push(todoObj)
    setJSObjToStorage(todos)
    render()
}
})

document.querySelector('#note-content-filter').addEventListener('input',function(e){
    filters.textFilter = e.target.value
    const filteredTodos = contentTodosFilter()
    renderItems(filteredTodos)
})

document.querySelector('#note-status-filter').addEventListener('input',function(e){
    filters.statusFilter = e.target.checked
    const filteredTodos = statusTodosFilter(e.target.value)
    renderItems(filteredTodos)
})
