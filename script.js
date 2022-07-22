function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (randomChoice == 1) {console.log("Computer picked Rock")
    return "rock"
} 
    if (randomChoice == 2) {console.log("Computer picked Paper")
    return "paper"
} 
    if (randomChoice == 3) {console.log("Computer picked Scissors")
    return "scissors"
}
    
    
    
}

function playerChoice() {
    escolha = prompt("Pick, Rock, Paper or Scissors:");
    console.log(`Escolheste ${escolha}`)
    escolha_lower = escolha.toLowerCase();
    return escolha_lower;
}
let pontosJogador = 0;
let pontosPC = 0;
console.log(pontosJogador);

jogo()
function jogo() {
    let i =0;
    for(i=0; i<=4; i++){
        
        let pickJogador = playerChoice();
        let pickPC = getComputerChoice();
        if(pickJogador === pickPC ) {console.log("Empate")}
        else if(pickJogador === "rock" && pickPC === "scissors") {console.log("Vitoria"); pontosJogador+=1}
        else if(pickJogador === "paper" && pickPC === "rock") {console.log("Vitoria"); pontosJogador+=1}
        else if(pickJogador === "scissors" && pickPC === "paper") {console.log("Vitoria"); pontosJogador+=1}  
        else {console.log("Perdeste"); pontosPC= pontosPC + 1}
        console.log(`Pontos do jogador ${pontosJogador}`)
        console.log(`Pontos do PC ${pontosPC}`)
        
    }
    }
if(pontosJogador>pontosPC) {
    console.log("Ganhaste!")
}
else if(pontosJogador===pontosPC){console.log("Empataram!")}
else{"Perdeste!"}