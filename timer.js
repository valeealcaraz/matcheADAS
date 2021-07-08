// *********************************
// *** Variable Settings of Timer***
// *********************************
let gameMinutes = 2;
let gameSeconds = gameMinutes * 60;
const gameTimeSpan = document.getElementById("gameTime")

// ********************
// ***End Game Alert***
// ********************
const endGame = () => {
    swal("Fin de la partida", "Gracias por participar", {
        buttons: {
            end: {
                text: "Finalizar la partida",
                value: "end",
                className: "btn-swal",
            },
            again: {
                text: "Jugar de nuevo",
                value: "again",
                className: "btn-swal",
            },
        },
    })
        .then((value) => {
            switch (value) {
                case "again":
                    
                    window.alert("Empezar de nuevo");
                    break;
                case "end":
                    window.alert("Cerrar la ventana");
                    break;
            }
        });
}

// ********************
// ***Game Countdown***
// ********************
const gameCountdown = () => {
    // ¡REVISAR EL CRONOMETRO PORQUE QUEDA 1 SEGUNDO DE SOBRA!
    let chronometer = setInterval(() => {
        let minutes = Math.floor(gameSeconds / 60);
        let seconds = (gameSeconds % 60);
        seconds = seconds < 10 ? "0" + seconds : seconds
        gameTimeSpan.innerHTML = `${minutes} : ${seconds}`
        gameSeconds--;
        if (gameSeconds == 0) {
            clearInterval(chronometer);
        }
    }, 1000);
    setTimeout(endGame, gameSeconds * 1000);
}
