const hangman = new Hangman('cat mat',8)
document.querySelector('#word').innerHTML = hangman.getGussedWord()
document.querySelector('#remaining-attempt').innerHTML = hangman.remainingGuesses
document.querySelector('#guessed-letter').value = ''

document.querySelector('#guessed-letter').addEventListener('input',function(e){
    const guessedLetter = e.target.value
    hangman.makeGuess(guessedLetter)
    document.querySelector('#word').innerHTML = hangman.getGussedWord()
    document.querySelector('#remaining-attempt').innerHTML = hangman.remainingGuesses
    document.querySelector('#already-gussed-letter').innerHTML = hangman.gussedLetters
    document.querySelector('#guessed-letter').value = ''
    if(hangman.remainingGuesses < 1){
        alert(`You have lost the game, correct word was ${hangman.word.join('')}`)
        document.querySelector('#guessed-letter').disabled = true
    }else{
        const isFinished = hangman.word.every((letter) =>
            hangman.gussedLetters.includes(letter) || letter === ' '
        )
        if(isFinished){
            alert(`You have won the game, correct word was ${hangman.word.join('')}`)
            document.querySelector('#guessed-letter').disabled = true
        }
    }
});

