// *************************
// **Show game information**
// *************************
const showInfo = () => {
    swal(
        "¡Bienvenida!",
        "En MatcheADAS tu objetivo es juntar tres o más ítems del mismo tipo, ya sea en fila o columna. Para eso selecciona un ítem, y a continuación un ítem adyacente para intercambiarlos de lugar. Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!",
        {
            buttons: "¡A jugar!",
        })
}
const info = document.getElementById("info");
info.addEventListener("click", showInfo)


// *********************
// **Select Game Level**
// *********************
const gameLevel = () => {
    swal("Nuevo Juego", "Elige el nivel de dificultad", {
        buttons: {
            easy: "Fácil",
            normal: "Normal",
            hard: "Difícil",
        },
    })
        .then((value) => {
            switch (value) {
                case "easy":
                    var width = 9;
                    break;
                case "normal":
                    var width = 8;
                    break;
                case "hard":
                    var width = 7;
                    break;
            }
            createBoard(width)
            // createChrono()
            // gameCountdown()
        });
}

// **************
// **Reset Game**
// **************
const clearBoard = () => {
    board.innerHTML = "";
}
const resetGame = () => {
    swal(
        "¿Reiniciar juego?",
        "¡Perderás todo tu puntaje acumulado!",
        {
            buttons: {
                resetNo: "Cancelar",
                resetYes: "Nuevo juego",
            }
        })
        .then((value) => {
            switch (value) {
                case "resetNo":
                    break;
                case "resetYes":
                    clearBoard()
                    gameLevel()
                    break;
            }
        },
        );
}
const reset = document.getElementById("reset");
reset.addEventListener("click", resetGame)

// **************
// **Start Game**
// **************
const startGame = () => {
    swal(
        "¡Bienvenida!",
        "En MatcheADAS tu objetivo es juntar tres o más ítems del mismo tipo, ya sea en fila o columna. Para eso selecciona un ítem, y a continuación un ítem adyacente para intercambiarlos de lugar. Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!",
        {
            buttons: "¡A jugar!",
        })
        .then(() => {
            gameLevel()
        },
        );
}

startGame()

