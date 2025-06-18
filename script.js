let userscore = 0;
let compscore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
 
const result= document.querySelector("#game-result");




function game(userchoice){
    const choices = ['rock','paper','scissors'];
    const compchoice = choices[Math.floor(Math.random()*3)];
    

    if(userchoice === compchoice){
        result.innerHTML = "It's a draw !!";
        result.style.color = "blue";
    }
    else if(userchoice === "rock" && compchoice === "scissors"){

        result.innerHTML = "You win !!";
        result.style.color = "green";

        userscore++;
    }

    else if(userchoice === "paper" && compchoice === "rock"){
        result.innerHTML = "You win !!";
        result.style.color = "green";
        userscore++;
    }
    else if(userchoice === "scissors" && compchoice === "paper"){
        result.innerHTML = "You win !!";
          result.style.color = "green";
        userscore++;
    }
    else{
        result.innerHTML = "You lose !!";
          result.style.color = "red";
        compscore++;
        
    }

document.getElementById("user-pick").src = userchoice + ".png"
document.getElementById("comp-pick").src = compchoice + ".png"

document.getElementById("user-pick").style.display="inline"
document.getElementById("comp-pick").style.display="inline"
    
userScore_span.innerHTML = userscore;
compScore_span.innerHTML = compscore;

}

function reset(){
    userscore = 0;
    compscore = 0;


    userScore_span.innerHTML = userscore;
    compScore_span.innerHTML = compscore;
    result.innerHTML = "Make Your Move!!";

    document.getElementById("user-pick").style.display="none"
    document.getElementById("comp-pick").style.display="none"
}