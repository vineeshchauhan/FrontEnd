const Hangman = function(attemptedWords,alreadyGussedletters, remainingAttempt){
    
    this.attemptedWordsArray  = attemptedWords.toLowerCase().split('')
    this.alreadyGussedletters = []
    this.remainingAttempt = remainingAttempt
}

Hangman.prototype.getGussesWord = function (){
    const correctWordArray = 'cat'.split('')
    let word = ''
  //  console.log(this.attemptedWordsArray)
  //  console.log(correctWordArray)
    for(let i =0 ; i < this.attemptedWordsArray.length ; i++){
        if((this.attemptedWordsArray[i] == correctWordArray[i])){
            word = word.concat(this.attemptedWordsArray[i])
        //    console.log(this.attemptedWordsArray[i])
         //   console.log(correctWordArray[i])
          //  console.log(word)
        }else{
            word = word.concat('*')
        }
    }
    return word
}

const game1 = new Hangman('sat',['s','a','t'],5)
console.log(game1.getGussesWord())
//const game2 = new Hangman('Dog',5)

//console.log(game1)
//console.log(game2)