let score = 0;

/* Arreglar las posiciones no validas */


const hMatch = () => {
    for (let i = 0; i < itemsArray.length - 2; i++) {
        let noMatch = itemsArray[i].textContent;
        let twoMatch = itemsArray[i + 1].textContent;
        let threeMatch = itemsArray[i + 2].textContent;
        // let fourMatch = itemsArray[i+3].textContent;
        // let fiveMatch = itemsArray[i+4].textContent;

        if ( //noMatch === twoMatch && noMatch === threeMatch && noMatch === fourMatch && noMatch === fiveMatch  || 
            // noMatch === twoMatch && noMatch === threeMatch && noMatch === fourMatch || 
            noMatch === twoMatch && noMatch === threeMatch) {
                score = score + 100

            console.log("hay bloque horizontal");
            console.log(score);

        }
    }
}

/* Como hacemos que sea reutilizable la funcion (sin width) */


const vMatch = () => {

    for (let i = 0; i < itemsArray.length - 14; i++) {
        let firstColumn = itemsArray[i].textContent;
        let secondColumn = itemsArray[i + 7].textContent;
        let thirdColumn = itemsArray[i + 14].textContent;

        if (firstColumn === secondColumn && firstColumn === thirdColumn) {
            score = score + 100
            console.log("hay bloque vertical");
            console.log(score);
        }
    }
}
