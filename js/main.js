document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            let type = this.getAttribute("data-tyoe");
            runGame(type);
        })
    }
})
function runGame(){
    
}
function userAnswer(){
    
}
function opponentAnswer(){
    
}
function checkAnswer(){
    
}