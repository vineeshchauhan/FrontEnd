//DOM Document Object Model
// Html Document is modeled using Javascripts Objects.
//document is JS object used to access/manipulate DOM.
// default browser live-server --browser=firefox

//select and delete
//const p = document.querySelector('p')
//p.remove()

//select All and delete
const ps = document.querySelectorAll('p')

ps.forEach(function(p){
    p.textContent = 'Change Everything'
    //item.remove()
})

const notes = [{
    title : 'Health',
    body : 'Excercise daily'
},{
    title : 'Wealth',
    body : 'Save and Invest'
},{
    title : 'Career',
    body : 'Continue learing'
},{
    title : 'Family',
    body : 'All Set'
}]

//Create an element and add to DOM
notes.forEach(function(note){
    const p = document.createElement('p')
    p.textContent = note.title + ' : '+ note.body
    document.querySelector('body').appendChild(p)
})