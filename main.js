const choice1 = "rock"
const choice2 = "paper"
const choice3 = "scissors"
const playerSelection = prompt("Rock, Paper, Scissors?",);
const computerSelection = getComputerChoice()

return playerSelection === computerSelection

function getComputerChoice(){
    const RPS =["Rock","Paper","Scissors"];
    return computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
  }

function gameLogic(playerSelection, computerSelection){

if (playerSelection === computerSelection.toLowerCase){
  document.write("It's a tie!")
}
else if ("rock" === "paper"){ 
  document.write("Paper covers rock!")
  document.write("Computer wins!")
}
else if ("paper" === "rock"){ 
  document.write("Paper covers rock!")
  document.write("Player wins!")
}
else if ("rock" === "scissors"){
  document.write("Rock smashes scissors!")
  document.write("Player wins!")
}
else if ("scissors" === "rock"){
  document.write("Rock smashes scissors!")
  document.write("Computer wins!")
}
else if ("scissors" === "paper"){
  document.write("Scissors cuts paper!")
  document.write("Player wins!") 
}
else if ("paper" === "scissors"){
  document.write("Scissors cuts paper!")
  document.write("Computer wins!")
}
else if ("rock" === "scissors"){
  document.write("Rock smashes scissors!")
  document.write("Player wins!")
}
else if ("scissors" === "rock"){
  document.write("Rock smashes scissors!")
  document.write("Computer wins!")
}

 else{
document.write("thanks for playing!")
}

}

console.log()
