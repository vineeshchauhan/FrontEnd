document.querySelector('#add-edit-note-btn').addEventListener('click',() => {
   const note = document.querySelector('#add-note').value
   addNote(note)
   location.assign('/index.html')
})

const id = location.hash.substring(1)
            console.log(id)
            const note = notes.find((note) => note.id === id)
            document.querySelector('#add-note').value = note.noteText


