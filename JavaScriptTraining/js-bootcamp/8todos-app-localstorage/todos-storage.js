const storeToLocal = function(value){
    localStorage.setItem(key,value)
}

const getFromLocal = function(){
    return localStorage.getItem(key)
}

const getJSObjFromStorage = function(){
    const todosJSONObject = getFromLocal()
    return JSON.parse(todosJSONObject)
}

const setJSObjToStorage = function(todos){
    const todosStringJSON = JSON.stringify(todos)
    storeToLocal(todosStringJSON)
    
}