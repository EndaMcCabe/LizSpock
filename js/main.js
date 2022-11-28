document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            let type = this.getAttribute("data-type");
            runGame(type);
        })
    }
})

function runGame(type){
    // Create opponent answer by generating a random number: 0=Rock, 1=Paper, 2=Scissors, 3=Lizard, 4=Spock
    // Take in the computers randomly generated choice by a random number through an array and send it to the choice function of the user's input.
    let opponent = Math.floor(Math.random() * 5);
        
    let opChoice = [
        "Rock",
        "Paper",
        "Scissors",
        "Lizard",
        "Spock"
    ];

    let enemy = opChoice[opponent];

    // Depending on the button the user pressed gives the function declaring 
    // that and pushes the computer's choice as a parameter
    if(type === "rock"){
        rockChoice(enemy);
    }else if(type === "paper"){
        paperChoice(enemy);
    }else if(type === "scissors"){
        scissorsChoice(enemy);
    }else if(type === "lizard"){
        lizardChoice(enemy);
    }else if(type === "spock"){
        spockChoice(enemy);
    }
    document.getElementById('userChoice').innerText=type+" vs ";
    document.getElementById('compChoice').innerText=enemy;
    
}

// The choice is rock and compares to computers choice and calls the result function
function rockChoice(enemy){
    switch(enemy){
        case 'Rock':
            draws();
        break;
        case 'Paper':
            lose();
        break;
        case 'Scissors':
            wins();
        break;
        case 'Lizard':
            wins();
        break;
        case 'Spock':
            lose();
        break;
    }
}

// The choice is paper and compares to computers choice and calls the result function
function paperChoice(enemy){
    switch(enemy){
        case 'Rock':
            wins();
        break;
        case 'Paper':
            draws();
        break;
        case 'Scissors':
            lose();
        break;
        case 'Lizard':
            lose();
        break;
        case 'Spock':
            wins();
        break;
    }
}

// The choice is scissors and compares to computers choice and calls the result function
function scissorsChoice(enemy){
    switch(enemy){
        case 'Rock':
            lose();
        break;
        case 'Paper':
            wins();
        break;
        case 'Scissors':
            draws();
        break;
        case 'Lizard':
            wins();
        break;
        case 'Spock':
            lose();
        break;
    }
}

// The choice is lizard and compares to computers choice and calls the result function
function lizardChoice(enemy){
    switch(enemy){
        case 'Rock':
            lose();
        break;
        case 'Paper':
            wins();
        break;
        case 'Scissors':
            lose();
        break;
        case 'Lizard':
            draws();
        break;
        case 'Spock':
            wins();
        break;
    }
}

// The choice is spock and compares to computers choice and calls the result function
function spockChoice(enemy){
    switch(enemy){
        case 'Rock':
            wins();
        break;
        case 'Paper':
            lose();
        break;
        case 'Scissors':
            wins();
        break;
        case 'Lizard':
            lose();
        break;
        case 'Spock':
            draws();
        break;
    }
}


function wins(){
    //Get the span tag 'score' and increase it by 1 for winning
    let oldWins = parseInt(document.getElementById('score').innerText);
    document.getElementById("score").innerText = ++oldWins;
    document.getElementById('result').innerText = "Victory!";
}

function lose(){
    //Get the span tag 'incorrect' and increase it by 1 for losing
    let oldLoss = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById("incorrect").innerText = ++oldLoss;
    document.getElementById('result').innerText = "Loss!";
}

function draws(){
    //Get the span tag 'incorrect' and increase it by 1 for losing
    let oldDraw = parseInt(document.getElementById('draw').innerText);
    document.getElementById("draw").innerText = ++oldDraw;
    document.getElementById('result').innerText = "Draw?";
}