const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');
const picks = ["Rock", "Paper", "Scissors"];
const h2player = document.querySelector('.player')
const h2comp = document.querySelector('.comp')
const h3picked = document.querySelector('.picked');
let compPick = "";
let playerPick = "";
let compScore = 0;
let playerScore = 0;

function pickAI() {
    let a = Math.floor(Math.random() * 3);
    compPick = picks[a];
}

function pickedwin() {
    h3picked.textContent = "You picked " + playerPick + " against the computer's " + compPick + "! You won this round!"
}

function pickedlose() {
    h3picked.textContent = "You picked " + playerPick + " against the computer's " + compPick + "! You lost this round!"
}

function drawpick() {
    h3picked.textContent = "You picked " + playerPick + " against the computer's " + compPick + "! This round is a draw!"
}

function score(compPick, playerPick) {
    switch (true) {
        case compPick == "Rock" && playerPick == "Scissors":
            compScore++;
            pickedlose();
            break;
        case compPick == "Rock" && playerPick == "Paper":
            playerScore++;
            pickedwin()
            break;
        case compPick == "Paper" && playerPick == "Rock":
            compScore++;
            pickedlose();
            break;
        case compPick == "Paper" && playerPick == "Scissors":
            playerScore++;
            pickedwin()
            break;
        case compPick == "Scissors" && playerPick == "Paper":
            compScore++;
            pickedlose();
            break;
        case compPick == "Scissors" && playerPick == "Rock":
            playerScore++;
            pickedwin()
            break;
        default:
            drawpick();
            break;
    }
}

function scoretrack() {
    h2player.textContent = "Player: " + playerScore;
    h2comp.textContent = "AI: " + compScore;
}

function check() {
    if (compScore == 5) {
        alert("The computer won!")
    }
    else if (playerScore == 5) {
        alert("You won!")
    } 
}

btnRock.addEventListener('click', () => {
    playerPick = btnRock.textContent
    pickAI();
    score(compPick, playerPick);
    scoretrack();
    check();
})

btnPaper.addEventListener('click', () => {
    playerPick = btnPaper.textContent
    pickAI();
    score(compPick, playerPick);
    scoretrack();
    check();
})

btnScissors.addEventListener('click', () => {
    playerPick = btnScissors.textContent
    pickAI();
    score(compPick, playerPick);
    scoretrack();
    check();
})
