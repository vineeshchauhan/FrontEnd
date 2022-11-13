const getJSObjectFromStorage = function(){
    const jsonString = localStorage.getItem(key)
    if( jsonString !== null)
        return JSON.parse(jsonString)
    else
        return []
}

const setJSObjectToStorage = function(){
    const jsonString = JSON.stringify(notes)
    localStorage.setItem(key,jsonString)
}
