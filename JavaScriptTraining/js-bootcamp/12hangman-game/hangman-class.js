class Hangman {
    constructor(word,gussedWord,gussedLetter,remaingGuesses,lettersAlreadyTaken){
        this.word =word
        this.gussedWord =gussedWord
        this.gussedLetter = gussedLetter
        this.remaingGuesses = remaingGuesses
        this.lettersAlreadyTaken = lettersAlreadyTaken
    }
    showWord(){
        //convert word to array
        let word = this.word.toLowerCase().split('')
        //find out if the gussedLetter is present in the corret word
        const letter = word.find((w) => {
            return this.gussedLetter === w
        })
        //
        if(letter !== null && letter !== undefined){
            //find the index of gussedLetter in correct word
            const index = this.word.indexOf(this.gussedLetter)
            //Set letter in gussed word
            this.gussedWord = `${this.gussedWord.slice(0,index)}${this.gussedLetter}${this.gussedWord.slice(index+1,this.word.length)}`
        }else{
            //Set letter in lettersAlreadyTaken
            (this.gussedWord !== '') ? this.lettersAlreadyTaken = 
            ((this.lettersAlreadyTaken !== '') ? this.lettersAlreadyTaken.concat(','+this.gussedLetter) :  
            this.lettersAlreadyTaken.concat(this.gussedLetter)) : ''
        }
        //for initial load
        return (this.gussedWord !== '') ? this.gussedWord : this.word.replace(/([a-zA-Z])/g, "*")
     }
    remainingGuess(){
        if(this.gussedLetter !== null && this.gussedLetter !== '' && this.gussedLetter !== undefined){
            return this.remaingGuesses - 1 
        }else{
            return this.remaingGuesses
        }
    }
    lettersAlreadyTakenFunc(){
        return this.lettersAlreadyTaken
    }
}
