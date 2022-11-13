const key = "notes"

const addNote = (noteText) => {
    const note = {
        id : uuidv4(),
        noteText : noteText,
        createTimeStamp : moment().valueOf()
    }
    notes.push(note)
    setToLocalStorage(notes)
}

const setToLocalStorage = (notes) => {
    localStorage.setItem(key,JSON.stringify(notes))
}

const getFromLocalStorage = (notes) => {
    return JSON.parse(localStorage.getItem(key))
}

const deleteNote = (id) => {
    const index = notes.findIndex((note)=> (note.id === id))
    notes.splice(index,1)
    setToLocalStorage(notes)
}

const notes = getFromLocalStorage()