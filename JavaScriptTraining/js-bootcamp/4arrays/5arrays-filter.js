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
        completed : false
        },{
        task : 'Open Your Terminal',
        completed : false}
    ]

let filterTaks = function(todos,status){

return todos.filter(function(item){
    return item.completed === status
})
}
console.log(filterTaks(todos,false))