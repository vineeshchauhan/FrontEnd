const key = 'notes'

//Get Notes from the storage
let notes = getJSObjectFromStorage()

const addNote = function(text){
    const note = {
        id : uuidv4(),
        noteText : text,
        timeStamp : moment().valueOf()
    }
    notes.push(note)
}

const updateNote = function(text,note){
        note.noteText = text
}

const searchNote = function(noteId){
    const note = notes.find(function(note){
        return note.id === noteId
    })    
    return note
}