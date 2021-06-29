
const divTimer = document.getElementById("timer");
divTimer.classList.add("display-none");
divTimer.classList.add("timer");

const timerIconDiv = document.createElement("div");
timerIconDiv.classList.add("flex-center50");
timerIconDiv.classList.add("flex-center50");

const timerIcon = document.createElement("i");
timerIcon.classList.add("fas");
timerIcon.classList.add("fa-hourglass-half");

const timerSpan = document.createElement("span");
timerSpan.classList.add("flex-center50");

let gameTime = 5;
let timerSpanText = document.createTextNode(gameTime);

document.body.appendChild(divTimer);
divTimer.appendChild(timerIconDiv);
timerIconDiv.appendChild(timerIcon);
divTimer.appendChild(timerSpan);


const createChrono = () => {
    divTimer.classList.remove("display-none");
    timerSpan.appendChild(timerSpanText);
}

const endGame = () => {
    swal("Fin de la partida", "Gracias por participar", {
        buttons: {
            end: "Finalizar la partida",
            again: "Jugar de nuevo",
        },
    })
        .then((value) => {
            switch (value) {
                case "again":
                    timerSpan.innerHTML = " "
                    gameTime = 5;
                    createChrono();
                    gameCountdown();
                    break;
                case "end":
                    window.close();;
                    break;
            }
        });
}

const gameCountdown = () => {
    let chronometer = setInterval(() => {
        console.log(gameTime--);
        timerSpan.innerHTML = `${gameTime}`;
        if (gameTime == 0) {
            clearInterval(chronometer)
        }
    }, 1000);
    setTimeout(endGame, gameTime * 1000);
}





