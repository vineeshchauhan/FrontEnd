//Universe of word
const wordUniverse = ['cat','bat','have','done','home','sit','one','you','him','love','his','few','both','can','yet','live','now','too','sip','dog','hug']
//const wordUniverse = ['Car Parts']

//Initialize the variables
//Randomly select a word out of wordUniverse
let word = wordUniverse[Math.ceil(Math.random()*wordUniverse.length-1)]
let guessedWord = ''
let guessedLetter = ''
let remaingGuesses = ''
let letterTaken = ''

//call constructor 
let hangman = new Hangman(word,guessedWord,guessedLetter,10,letterTaken)

//Set values to UI
document.querySelector('#word-universe').innerHTML = wordUniverse
document.querySelector('#word').innerHTML = hangman.showWord()
document.querySelector('#remaining-attempt').innerHTML = hangman.remainingGuess()
document.querySelector('#already-gussed-letter').innerHTML = hangman.lettersAlreadyTakenFunc()

//Gussed Letter     
document.querySelector('#guessed-letter').addEventListener('input',function(e){
    //Get the vaues from UI
    guessedWord = document.querySelector('#word').innerHTML
    guessedLetter = e.target.value
    remaingGuesses = document.querySelector('#remaining-attempt').innerHTML
    letterTaken = document.querySelector('#already-gussed-letter').innerHTML
    
    //Show error if all attempts are done.
    if(remaingGuesses < 1){
        alert(`You have lost the game, correct word was ${word}`)
    }

    hangman = new Hangman(word,guessedWord,guessedLetter,remaingGuesses,letterTaken)
    document.querySelector('#word').innerHTML = hangman.showWord()
    document.querySelector('#remaining-attempt').innerHTML = hangman.remainingGuess()
    document.querySelector('#already-gussed-letter').innerHTML = hangman.lettersAlreadyTakenFunc()
    //Reset input field
    document.querySelector('#guessed-letter').value = ''
})


const request = new XMLHttpRequest()
request.open('GET','http://puzzle.mead.io/puzzle')
request.send()

request.addEventListener('readystatechange',(e) => {
    if(e.target.readyState === 4){
        console.log(e.target.responseText)
        const jsObj = JSON.parse(e.target.responseText)
        console.log(jsObj)
    }
})
