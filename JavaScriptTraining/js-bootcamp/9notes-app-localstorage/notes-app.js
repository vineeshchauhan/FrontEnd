//key for local storage
// const key = 'notes'

// //Get Notes from the storage
// const notes =  [{
//     id: 1,
//     title : 'Finish Your work'
// },
// {   id: 2,
//     title : 'Do not finish Your work'
// }]//getJSObjectFromStorage()

render(notes)

document.querySelector('#add-note').addEventListener('click',function(e){
    location.assign(`\edit.html`)
})

window.addEventListener('storage',function(e){
    if(e.key === key){
        notes = e.newValue
        render(JSON.parse(notes))
    }
})

const date = moment()
console.log(date.toString())
console.log(date.hour(3).toString())
console.log(date.subtract(7,'days').toString())
console.log(date.fromNow())
console.log(date.valueOf())
const milli = date.valueOf()
console.log(moment(milli).format('Do MMM, YYYY'))

