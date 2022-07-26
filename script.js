
let pontosJogador = 0;
let pontosPC = 0;
let imagem = "";
let imagemPC = "";
console.log(pontosJogador);

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

//pedra.addEventListener("click",jogo());

const pontuacao = document.getElementById("display",);
const button = document.getElementById('pedra');
button.addEventListener('click', (event) => {
    jogo("rock",getComputerChoice())
   // document.getElementById('display').innerHTML = `Pontos do jogador ${pontosJogador} <br> Pontos do PC ${pontosPC} `);
});

const button1 = document.getElementById('papel');
button1.addEventListener('click', (event) => {
    jogo("paper",getComputerChoice())
 //   document.getElementById('display').innerHTML = `Pontos do jogador ${pontosJogador} <br> Pontos do PC ${pontosPC} `);
});

const button2 = document.getElementById('tesoura');
button2.addEventListener('click', (event) => {
    jogo("scissors",getComputerChoice())
  //  document.getElementById('display').innerHTML = `Pontos do jogador ${pontosJogador} <br> Pontos do PC ${pontosPC} `);
});


//document.getElementById("bt1").addEventListener("click", jogo(playerChoice(),getComputerChoice()));


    


function playerChoice() {
    escolha = prompt("Pick, Rock, Paper or Scissors:");
    console.log(`Escolheste ${escolha}`)
    escolha_lower = escolha.toLowerCase();
    return escolha_lower;
}



//jogo()
function jogo(pickJogador, pickPC) {

        //let pickJogador = playerChoice();
        //let pickPC = getComputerChoice();
        if(pickJogador === pickPC ) {console.log("Empate")}
        else if(pickJogador === "rock" && pickPC === "scissors") {console.log("Vitoria"); pontosJogador+=1}
        else if(pickJogador === "paper" && pickPC === "rock") {console.log("Vitoria"); pontosJogador+=1}
        else if(pickJogador === "scissors" && pickPC === "paper") {console.log("Vitoria"); pontosJogador+=1}  
        else {console.log("Perdeste"); pontosPC= pontosPC + 1}
        console.log(`Pontos do jogador ${pontosJogador}`)
        console.log(`Pontos do PC ${pontosPC}`)

        if(pickJogador == "rock"){imagem = "rock.png"}
        else if(pickJogador == "paper"){imagem = "paper.png"}
        else if(pickJogador == "scissors"){imagem = "scissors.png"}

        if(pickPC == "rock"){imagemPC = "rock.png"}
        else if(pickPC == "paper"){imagemPC = "paper.png"}
        else if(pickPC == "scissors"){imagemPC = "scissors.png"}



        document.getElementById('estadoJogo').innerHTML = `Escolheste: <img src="${imagem}" width="50px" height="50x"><br>
        O PC escolheu: <img src="${imagemPC}" width="50px" height="50x">`;

        document.getElementById('display').innerHTML = `Pontos do jogador ${pontosJogador} <br> Pontos do PC ${pontosPC} `;

        if(pontosJogador == 5) {
            document.getElementById('display').innerHTML += `<br> Ganhaste!`;
            button.remove();
            button1.remove();
            button2.remove();
        } 
        if(pontosPC == 5) {
            document.getElementById('display').innerHTML += `<br> Perdeste!`;
            button.remove();
            button1.remove();
            button2.remove();
        } 
    }
    


