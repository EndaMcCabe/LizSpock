document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            let type = this.getAttribute("data-tyoe");
            opponentAnswer();
            checkAnswer(type);
            runGame(type);
        })
    }
})

function runGame(type){
    
    switch(type === "Rock"){
        case opChoice(opponent) === "Rock":
            console.log('win');
        break;
        case opChoice(opponent) == "Paper":
            console.log('win');
        break;
        case opChoice(opponent) == "Scissors":
            console.log('win');
        break;
        case opChoice(opponent) == "Lizard":
            console.log('win');
        break;
        case opChoice(opponent) == "Spock":
            console.log('win');
        break;
    }
}

function opponentAnswer(){
    // Create opponent answer by generating a random number: 0=Rock, 1=Paper, 2=Scissors, 3=Lizard, 4=Spock
    let opponent = Math.floor(Math.random() * 5);
    
    let opChoice = {
        0:"Rock",
        1:"Paper",
        2:"Scissors",
        3:"Lizard",
        4:"Spock"
    };

    return(opChoice(opponent));
}
function checkAnswer(){
    
}