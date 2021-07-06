const start = () => {
    swal(
        "¡Bienvenida!",
        "En MatcheADAS tu objetivo es juntar tres o más ítems del mismo tipo, ya sea en fila o columna. Para eso selecciona un ítem, y a continuación un ítem adyacente para intercambiarlos de lugar. Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!",
        {
            buttons: "¡A jugar!",
        })
        .then(() => {
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
        })
}

start()