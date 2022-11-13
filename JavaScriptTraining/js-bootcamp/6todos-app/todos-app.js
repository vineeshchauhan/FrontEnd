const todos = [ {
    task : 'Morning Walk',
    completed : true
    },{
    task : 'Get some milk',
    completed : true
    },{ 
    task : 'Woke Up Bholu',
    completed : false
    },{
    task : 'Prepare Breakfast',
    completed : true
    },{
    task : 'Open Your Terminal',
    completed : false}
]

//filters as property will make it agile
const filters = {
    filterText : '',
    filterStatus : false
}

document.querySelector('#delete-todo').addEventListener('click',function(e){
    e.target.textContent = "Todo item has been deleted"
})

document.querySelector('#add-todo').addEventListener('click',function(e){
    e.target.textContent = "Todo item has been added"
})

document.querySelector('#search-todo').addEventListener('input',function(e){
    filters.filterText = e.target.value
    //innerHTML can be HTML text, tag
    document.querySelector('#todos-list').innerHTML=''
  //  divElement.fore
  //  const ps = document.querySelectorAll(divElement)
    // divElement.forEach(function(para){
    //     para.remove()
    // })
    
    const filteredTodos = filterTodos(todos,filters)
    console.log(filters.filterText)
    renderer(filteredTodos)
})

const filterTodos = function(todos,filters){

    console.log('filters.completed '+filters.filterText+' P '+filters.filterStatus)
        const filteredTodos = todos.filter(function(todo){
         
            console.log('todo.completed '+todo.completed)
            return filters.filterText !== '' && todo.task.toLowerCase().includes(filters.filterText.toLowerCase())
            || !(todo.completed === filters.filterStatus)
    })
    console.log(filteredTodos)
    return filteredTodos;
}

const renderer = function(todos){
        todos.forEach(function(todo){
        const divElement = document.querySelector('#todos-list');
        const para = document.createElement('p');
        para.textContent = todo.task
        divElement.appendChild(para)
    })
}

document.querySelector('#todo-form').addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e.target.elements.todoName.value)
    const todo = {
        task : e.target.elements.todoName.value,
        completed : false
   }
   todos.push(todo)
   document.querySelector('#todos-list').innerHTML=''
  // document.querySelector('#todo-form').querySelector('#todo-item').innerHTML=''
   renderer(todos)
   e.target.elements.todoName.value=""
})

document.querySelector("#todo-status").addEventListener('change',function(e){
    
    console.log(e.target.checked)
    filters.filterStatus = e.target.checked
    console.log('filters.filterStatus : '+filters.filterStatus)
    document.querySelector('#todos-list').innerHTML=''
    if(filters.filterStatus){
        const filteredTodos = filterTodos(todos,filters)
        renderer(filteredTodos)
    }else{
        renderer(todos)
    }
   // console.log("p"+filteredTodos)
  //  renderer(filteredTodos)
})

document.querySelector('#todo-options').addEventListener('change',function(e){
    console.log(e.target.value)
})    
//  filterTodos(todos,' ')
renderer(todos,filters)

    // const para = document.createElement('p');
    // para.textContent = e.target.value
    // const elem = document.querySelector('body')
    // elem.appendChild(para)
//})

//  document.querySelector('button').addEventListener('click',function(e){
//      e.target.textContent = "Todo List is updated. Click to Add Another"
//  })

//  const incomplete = todos.filter(function(todo){
//      return todo.completed === false
//  })

//   const message = `You have ${incomplete.length} tasks to do`

//  const para = document.createElement('p')
//  para.textContent = message
//  document.querySelector('body').appendChild(para)
//  todos.forEach(function(todo){
//      if(todo.completed === false){
//          const para = document.createElement('p')
//          para.textContent = todo.task
//          document.querySelector('body').appendChild(para)
//      }
//  })  
