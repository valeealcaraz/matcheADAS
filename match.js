/*************
* 
* COINCIDENCIAS
* 
*************/  

// Coincidencias Horizontales

// Caso 3 coincidencias HORIZONTALES:



const hMatch = () => {        

    for (let i = 0; i < width; i++) {
        for (let j = 0 ; j < width ; j++) {

            let noMatch = item[j].textContent;
            let twoMatch = item[j+1].textContent;
            let threeMatch = item[j+2].textContent;

            console.log(noMatch)

            // if(noMatch === twoMatch && noMatch === threeMatch) {            
            //     itemsArray[i].textContent = " ";
            //     itemsArray[i + 1].textContent = " ";
            //     itemsArray[i + 2].textContent = " ";                   
            //     console.log("hay bloque horizontal");
            //     scoreAdd()
            //     // matches.push(noMatch,twoMatch,threeMatch)
            // }
        }
    }
}


// const tieneBloqueHorizontal = (matriz) => {
//     for (let i = 0; i < matriz.length; i++) {
//         array = matriz[i];
//         for (let j = 0; j < array.length; j++) {
//             if (array[j] === array[j + 1] && array[j] === array[j + 2]) {
//                 for (let x = j; x < array.length - j; x++) {
//                     if (array[x] === array[x + 1]) {
//                     }
//                 }
//                 return true;
//                 // if ((array[j] === array[j + 1] && array[j] === array[j + 2] && array[j] === array[j + 3] && array[j] === array[j + 4]) ||
//                 //     (array[j] === array[j + 1] && array[j] === array[j + 2] && array[j] === array[j + 3]) || 
//                 //     (array[j] === array[j + 1] && array[j] === array[j + 2])) {
//             }
//         }
//     }
// }



// const intercambio = () => {
//     targetsArray[0].innerHTML = itemClicked[1];
//     targetsArray[1].innerHTML = itemClicked[0];
// }

// const actualizador = () => {
//     console.log('test', targetsArray[0], targetsArray[0].id);

//     for(let i = 0; i < itemsArray.length; i = i + 8) {
//         for(let j = i; j < 8; j++) {
//             console.log(itemsArray[i][j])
//         }
//         console.log('---------------------------');
//     }
//     /*for(let i=0 ; i<itemsArray.length ; i++){
//         if(targetsArray[0])
//     }*/
//     itemsArray.splice(itemsArray[idItems[0]],2,targetsArray[0],targetsArray[1]);
// }














// }

// //noMatch === twoMatch && noMatch === threeMatch && noMatch === fourMatch && noMatch === fiveMatch  || 
// noMatch === twoMatch && noMatch === threeMatch && noMatch === fourMatch || 
// let fourMatch = itemsArray[i+3].textContent;
// let fiveMatch = itemsArray[i+4].textContent;

// Caso 4 coincidencias HORIZONTALES:
 
// const hMatch3 = () => {
//     for (let i = 0; i < itemsArray.length - 2; i++) {
//         let noMatch = itemsArray[i].textContent;
//         let twoMatch = itemsArray[i + 1].textContent;
//         let threeMatch = itemsArray[i + 2].textContent;
//         // let fourMatch = itemsArray[i+3].textContent;
//         // let fiveMatch = itemsArray[i+4].textContent;

//         if ( //noMatch === twoMatch && noMatch === threeMatch && noMatch === fourMatch && noMatch === fiveMatch  || 
//             // noMatch === twoMatch && noMatch === threeMatch && noMatch === fourMatch || 
//             noMatch === twoMatch && noMatch === threeMatch) {
//             scoreAdd()
//             console.log("hay bloque horizontal");
//             noMatch = " ";
//             twoMatch = " ";
//             threeMatch = " ";
//         }
//     }
// }





// const vMatch = () => {

//     for (let i = 0; i < itemsArray.length - 14; i++) {
//         let firstColumn = itemsArray[i].getAttribute("data-value");
//         let secondColumn = itemsArray[i + 7].getAttribute("data-value");
//         let thirdColumn = itemsArray[i + 14].getAttribute("data-value");

//         if (firstColumn === secondColumn && firstColumn === thirdColumn) {
//             scoreAdd()
//             console.log("hay bloque vertical");
//             firstColumn = " ";
//             secondColumn = " ";
//             thirdColumn = " ";
//         }
//     }
// }