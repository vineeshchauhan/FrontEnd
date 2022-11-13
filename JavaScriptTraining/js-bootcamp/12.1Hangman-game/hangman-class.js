class Hangman{
    constructor(word,remainingGuesses){
        this.word = word.split('')
        this.remainingGuesses = remainingGuesses
        this.gussedLetters = []
    }
}

Hangman.prototype.getGussedWord = function (){
    //this.gussedLetters.push(gussedLetter)
    //const word = 
    let gussedWord = ''
    this.word.forEach(letter => {
        if(this.gussedLetters.includes(letter) || letter === ' '){
            gussedWord = gussedWord + letter
        }else{
            gussedWord = gussedWord +'*'
        }
    });
    return gussedWord
}

Hangman.prototype.makeGuess = function(gussedLetter){

    const isUnique = !this.gussedLetters.includes(gussedLetter)
    const isBadGuess = !this.word.includes(gussedLetter)

    if(isUnique){
        this.gussedLetters.push(gussedLetter)
    }
    if(isUnique && isBadGuess){
        this.remainingGuesses--
    }
}

