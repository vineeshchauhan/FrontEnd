document.querySelector('#add-note-btn').addEventListener('click',function(e){
    location.assign('/edit.html')
})

renderNotes(notes)
