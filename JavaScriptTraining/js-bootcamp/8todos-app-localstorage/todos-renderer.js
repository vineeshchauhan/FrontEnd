const render = function(){
    //Select the todos div and clean it
    if(todos != null){
        const divElement = document.querySelector('#note-content')
        divElement.innerHTML = '';

        //Get JS object from Storage
        todos = getJSObjFromStorage()
        //render todos
        todos.forEach(function(todo){
            //Create div to hold Name,status and delete button
            const div = document.createElement('div')
            const para = document.createElement('a')
            const checkbox = document.createElement('input')
            const button = document.createElement('input')

            //Para
            para.textContent = todo.task
            para.setAttribute('href','/edit.html')
            //Create checkbox
            checkbox.setAttribute("id", "done-checkbox");
            checkbox.setAttribute("type", "checkbox");
            checkbox.checked = todo.isCompleted
            checkbox.addEventListener('change',function(e){
                console.log(e.target.checked)
                if(e.target.checked){
                    todo.isCompleted = true;
                }else{
                    todo.isCompleted = false;
                }
                updateItem(todo.id,todo)
                render()
            })
            
            //Create Delete button
            button.setAttribute("type", "button");
            button.setAttribute("value", "Delete");
            button.setAttribute("id", "delete-todo");
            button.addEventListener('click',function(){
                removeItem(todo.id)
                render()
            })


            
            div.appendChild(checkbox)
            div.appendChild(para)
            div.appendChild(button)
            divElement.appendChild(div)
        })
    }
}

const renderItems = function(todos){
    //Select the todos div and clean it
    const divElement = document.querySelector('#note-content')
    divElement.innerHTML = '';

    //Get JS object from Storage
   // todos = getJSObjFromStorage(key)

    //render todos
    todos.forEach(function(todo){
        //Create div to hold Name,status and delete button
        const div = document.createElement('div')
        const para = document.createElement('a')
        const checkbox = document.createElement('input')
        const button = document.createElement('input')

        //Para
        para.textContent = todo.task
        para.setAttribute('href','/edit.html')
        //Create checkbox
        checkbox.setAttribute("id", "done-checkbox");
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = todo.isCompleted
        checkbox.addEventListener('change',function(e){
            console.log(e.target.checked)
            if(e.target.checked){
                todo.isCompleted = true;
            }else{
                todo.isCompleted = false;
            }
            updateItem(todo.id,todo)
            render()
        })
        
        //Create Delete button
        button.setAttribute("type", "button");
        button.setAttribute("value", "Delete");
        button.setAttribute("id", "delete-todo");
        button.addEventListener('click',function(){
            removeItem(todo.id)
            render()
        })


        
        div.appendChild(checkbox)
        div.appendChild(para)
        div.appendChild(button)
        divElement.appendChild(div)
    })
}