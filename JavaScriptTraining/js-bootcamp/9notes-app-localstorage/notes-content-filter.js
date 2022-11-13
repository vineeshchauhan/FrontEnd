document.querySelector('#note-filter').addEventListener('input',function(e){

    const text = e.target.value
    console.log(text)
    console.log(notes)
   // const notes = getJSObjectFromStorage()
    const filteredNotes = notes.filter(function(note){
        return note.noteText.toLowerCase().includes(text.toLowerCase())
    })
    render(filteredNotes)
})