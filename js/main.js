document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            let type = this.getAttribute("data-tyoe");
            runGame(type);
        })
    }
})
function runGame(type){
    // Create opponent answer by generating a random number: 0=Rock, 1=Paper, 2=Scissors, 3=Lizard, 4=Spock
    let opponent = Math.floor(Math.random() * 5);
    switch(type === "Rock"){
        case 0:
            switch(opponent == 0){
                case 0:
                console.log("Draw");
                break;
            }
    }
}
// function userAnswer(){
    
// }
// function opponentAnswer(){
    
// }
// function checkAnswer(){
    
// }