const todos = [ {
    task : 'Morning Walk',
    completed : true
    },{
    task : 'Get some milk',
    completed : false
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
//-1 if a < b
// 0 if a === b
// 1 if a > b
console.log(todos.sort(function(a,b){
    if(a.completed === true && b.completed === true){
        return 0
    }else if(a.completed === true){
        return 1
    }else if(b.completed === true){
        return -1
    }
}))

