const renderNotes = (notes) =>{
    const div = document.querySelector('#notes')
    div.innerHTML = ''

    notes.forEach((note)=>{
        const noteDiv = document.createElement('div')
        const addTimeStamplabel = document.createElement('label')
        const noteEle = document.createElement('a')
        const deleteBtn = document.createElement('button')
        const lastChangeTimeStamplabel = document.createElement('label')

        addTimeStamplabel.textContent = moment(note.createTimeStamp).format('Do MMM, YYYY')

        noteEle.textContent = note.noteText
        noteEle.setAttribute('href',`/edit.html?#${note.id}`)
        noteEle.addEventListener('click',() => {
            
        } ) 

        deleteBtn.textContent = 'x'
        deleteBtn.addEventListener('click',() =>  deleteNote(note.id))
        

        lastChangeTimeStamplabel.textContent = moment(note.createTimeStamp).fromNow()        

        noteDiv.appendChild(addTimeStamplabel)
        noteDiv.appendChild(noteEle)
        noteDiv.appendChild(deleteBtn)
        noteDiv.appendChild(lastChangeTimeStamplabel)
        div.appendChild(noteDiv)
    })
}