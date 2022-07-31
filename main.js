function getComputerChoice(){
    const RPS =["Rock","Paper","Scissors"];
    return computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
  }

console.log(getComputerChoice())

