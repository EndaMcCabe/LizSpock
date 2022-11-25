document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            let type = this.getAttribute("data-type");
            opponentAnswer();
            runGame(type);
        })
    }
})

function runGame(type){
    // Create opponent answer by generating a random number: 0=Rock, 1=Paper, 2=Scissors, 3=Lizard, 4=Spock
    let opponent = Math.floor(Math.random() * 5);
        
    let opChoice = [
        "Rock",
        "Paper",
        "Scissors",
        "Lizard",
        "Spock"
    ];

    let enemy = opChoice[opponent];

    if(type === "Rock"){
        rockChoice(enemy);
    }else if(type === "Paper"){
        paperChoice(enemy);
    }else if(type === "Scissors"){
        scissorsChoice(enemy);
    }else if(type === "Lizard"){
        lizardChoice(enemy);
    }else if(type === "Spock"){
        spockChoice(enemy);
    }
    
}


function rockChoice(enemy){
    switch(enemy){
        case "Rock":
            draws();
        break;
        case "Paper":
            lose();
        break;
        case "Scissors":
            wins();
        break;
        case "Lizard":
            wins();
        break;
        case "Spock":
            lose();
        break;
    }
}

function paperChoice(enemy){

}

function lizardChoice(enemy){

}

function spockChoice(enemy){

}

function checkAnswer(type){
    let comp = opponentAnswer();
    
    switch(type){
        case "Rock":
            switch(comp) {
                case "Rock":
                    console.log('Draw');
                break;
                case "Paper":
                    console.log('Loss');
                break;
                case "Scissors":
                    console.log('Win');
                break;
                case "Lizard":
                    console.log('Win');
                break;
                case "Spock":
                    console.log('Loss');
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

function wins(){
    //Get the span tag 'score' and increase it by 1 for winning
    let oldWins = parseInt(document.getElementById('score').innerText);
    document.getElementById("score").innerText = ++oldWins;
}

function lose(){
    //Get the span tag 'incorrect' and increase it by 1 for losing
    let oldLoss = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById("incorrect").innerText = ++oldLoss;
}

// function draws(){
//     //Get the span tag 'incorrect' and increase it by 1 for losing
//     let oldDraw = parseInt(document.getElementById('incorrect').innerText);
//     document.getElementById("incorrect").innerText = ++oldDraw;
// }