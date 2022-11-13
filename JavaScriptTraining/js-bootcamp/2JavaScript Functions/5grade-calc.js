let calcScore = function(score, totalScore){
    let scorePercent = (score/totalScore)*100;

    if (scorePercent >= 90){
        calcScoreMessage('A',scorePercent)
    }else if (scorePercent <= 89 && scorePercent >= 80){
        calcScoreMessage('B',scorePercent)
    }else if (scorePercent <= 79 && scorePercent >= 70){
        calcScoreMessage('C',scorePercent)
    }else if (scorePercent <= 69 && scorePercent >= 60){
        calcScoreMessage('D',scorePercent)
    }else if (scorePercent <= 59 && scorePercent >=0){
        calcScoreMessage('E',scorePercent)
    }
}

let calcScoreMessage = function(grade,scorePercent){
    console.log(`You have got a ${grade} (${scorePercent}%)`)
}

calcScore(89,100)
calcScore(89,100)
calcScore(70,100)
calcScore(59,100)
calcScore(50,100)
calcScore(10,100)
