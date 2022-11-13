document.querySelector('#add-note-btn').addEventListener('click',function(e){
    const noteText = document.querySelector('#note-text').value
    const note = searchNote(noteId)
    if(note === undefined)
        addNote(noteText)
    else
        updateNote(noteText,note)
    setJSObjectToStorage()
    location.assign('/index.html')
})

const hash = location.hash
const noteId =  hash.substring(1)
const note = searchNote(noteId)

document.querySelector('#note-text').value = note.noteText

window.addEventListener('storage',function(e){
    console.log('H')
    if(e.key === key){
        let val = e.newValue
        notes = JSON.parse(val)
        render()
    }
})