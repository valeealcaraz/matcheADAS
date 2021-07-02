/*************
* 
* COINCIDENCIAS
* 
*************/  

// Coincidencias Horizontales

// Caso 3 coincidencias HORIZONTALES:


const hMatch3 = () => {
      
    for (let i = 0; i < itemsArray.length - 2; i++) {

        let noMatch = itemsArray[i].textContent;
        let twoMatch = itemsArray[i + 1].textContent;
        let threeMatch = itemsArray[i + 2].textContent;
        
        if(noMatch === twoMatch && noMatch === threeMatch) {
            scoreAdd()
            itemsArray[i].textContent = " ";
            itemsArray[i + 1].textContent = " ";
            itemsArray[i + 2].textContent = " ";                   
            console.log("hay bloque horizontal");
        }
    }
}

// for (let i = 0; i < divs.length - 2; i+widthUsable) {

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