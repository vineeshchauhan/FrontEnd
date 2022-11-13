    //Create render function
const render = function(notes){
    const notesDiv = document.querySelector('#notes')
    notesDiv.innerHTML = ''
    if( notes.length > 0){
        notes.forEach(function(note){
          
            //Create anchor
            const noteDiv = document.createElement('div')
            const dateField = document.createElement('label')

            const noteElement = document.createElement('a')
            const buttonElement = document.createElement('button')
            const updateTimeStamp = document.createElement('label')

            //date element console.log(moment(milli).format('Do MMM, YYYY'))
            console.log(moment(note.timeStamp))
            console.log(moment(note.timeStamp).toString())
            console.log(moment(note.timeStamp).toString())
           dateField.textContent = moment(note.timeStamp).format('Do MMM, YYYY')
           updateTimeStamp.textContent = moment(note.timeStamp).fromNow()

            //note element
            noteElement.textContent = note.noteText
            noteElement.setAttribute('href',`/edit.html#${note.id}`)

            //button element
            buttonElement.textContent = 'x'
            buttonElement.addEventListener('click',function(){
                const noteId = note.id
                const noteIndex = notes.findIndex(function(note){
                    return note.id === noteId
                })
                notes.splice(noteIndex,1)
                setJSObjectToStorage()
                render(notes)

            })
            noteDiv.appendChild(dateField)
            noteDiv.appendChild(noteElement)
            noteDiv.appendChild(buttonElement)
            noteDiv.appendChild(updateTimeStamp)
            notesDiv.appendChild(noteDiv)
        })
    }
}