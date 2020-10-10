import { secret } from "./secret.js"

const gameSetup = () => {
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    const terminal = document.querySelector("#terminal")
    terminal.textContent = "New game!"
    const lowerText = document.querySelector(".div5")
    const buttons = document.querySelectorAll(".choice");
    let qr_hint;
    let challengeSubmission;
    let gameOver = false;
    let kingPosition = false;
    let qrActive = false;

    const Rock = {beats: "Scissors", losesTo: "Paper"};
    const Paper = {beats: "Rock", losesTo: "Scissors"};
    const Scissors = {beats: "Paper", losesTo: "Rock"};

    const computerPlay = () => {
        const answer = secret[roundsPlayed] % 3;
    
        switch(answer) {
            case 0:
                return "Rock";
            case 1:
                return "Paper";
            case 2:
                return "Scissors";
        }
    }


    const playRound = (playerSelection, computerSelection) => {
        let play;
        roundsPlayed++;

        if (playerSelection === "rock") {
            play = Rock;
        } else if (playerSelection === "paper") {
            play = Paper;
        } else {
            play = Scissors;
        }
    
        console.log("Computer played " + computerSelection)
    
        if (play.beats === computerSelection) {
            playerScore++;
            terminal.textContent = `You won! Score is ${playerScore}-${computerScore}. Total rounds played: ${roundsPlayed}`
        } else if (play.losesTo === computerSelection) {
            computerScore++;
            terminal.textContent = `You lost! Score is ${playerScore}-${computerScore}. Total rounds played: ${roundsPlayed}`
        } else {
            terminal.textContent = `Tied! Score is ${playerScore}-${computerScore}. Total rounds played: ${roundsPlayed}`
        }
        
        if (roundsPlayed === 66) {
            gameOver = true;
            buttons.forEach((button) => {
                button.disabled = true;
            })
            terminal.textContent = "You have reached the maximum amount of rounds. Please reset the game!"
        }

    }

    
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (gameOver === true) return;
            let computerSelection = computerPlay();
            playRound(button.id.toString(), computerSelection);
        })
    });


    const winScreen = () => {
        const victoryPogLeft = document.querySelector(".bottom_left")
        const victoryPogRight = document.querySelector(".bottom_right")
        victoryPogLeft.setAttribute("src", "https://www.streamscheme.com/wp-content/uploads/2020/04/Pogchamp.png");
        victoryPogRight.setAttribute("src", "https://www.streamscheme.com/wp-content/uploads/2020/04/Pogchamp.png");
        lowerText.removeChild(challengeSubmission);
        lowerText.textContent = "You won! Thank you for playing. The formula to beat the computer 100% of the time is fibonacci(rounds_played) % 3. This will give you a number between 0-2, representing which hand the computer will play next.";
        const br = document.createElement("br")
        lowerText.appendChild(br);
        const inspirationLink = document.createElement("a");
        inspirationLink.setAttribute("href", "https://www.youtube.com/watch?v=i9CBKGLVCME");
        inspirationLink.textContent = "Mini game was inspired by this Mr Robot scene.";
        lowerText.appendChild(inspirationLink);
    }

    window.addEventListener("keydown", function(e) {
        const key = e.keyCode;
        if (key === 13 && challengeSubmission.value === "000000000000000595622a9a8f702800ba0cd5f2ac1e18d64c32671cab80f849") {
            winScreen();
        }
        else if (key === 82) {
            kingPosition = false;
            gameSetup();
        } else if (key === 68) {
            kingPosition = true;
        } else if (key === 56 && kingPosition === true && qrActive === false) {
            qrActive = true;
            const title = document.querySelector(".div1")
            qr_hint = document.createElement("img");
            qr_hint.setAttribute("src", "images/qr-code.png");
            qr_hint.setAttribute("height", "200px");
            qr_hint.setAttribute("width", "200px");
            challengeSubmission = document.createElement("input");
            challengeSubmission.setAttribute("placeholder", "obtain hash value of bitcoin block (number_of_ads^length_of_product_name). paste here then enter.");
            lowerText.textContent = "";
            lowerText.appendChild(qr_hint);
            lowerText.appendChild(challengeSubmission);
        } else {
            kingPosition = false;
            if (gameOver === true) return;
            const selection = document.querySelector(`img[data-key="${key}"]`)
            if (!selection) return;
            if (key === 82) {
                gameSetup();
            } else {
                let computerSelection = computerPlay();
                playRound(selection.id.toString(), computerSelection);
            }
        }

    })

}

gameSetup();




