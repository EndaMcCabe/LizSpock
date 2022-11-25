document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            let type = this.getAttribute("data-type");
            opponentAnswer();
            checkAnswer(type);
            runGame(type);
        })
    }
})

function runGame(type){
    
    
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
    let comp = opponentAnswer();
    
    switch(type){
        case "Rock":
            switch(comp) {
                case "Rock":
                    console.log('Draw');
                break;
            }
        break;
        case "Paper":
            console.log('win');
        break;
        case "Scissors":
            console.log('win');
        break;
        case "Lizard":
            console.log('win');
        break;
        case "Spock":
            console.log('win');
        break;
    }

}