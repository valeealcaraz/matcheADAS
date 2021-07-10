/*********
* 
*       COINCIDENCIAS
* 
*********/

// Coincidencias HORIZONTALES

const items = document.getElementsByClassName("item");

const hMatch = (width) => {
    for (let i=0; i < width; i++) {
        let rowItems = document.querySelectorAll(`[data-row="${i}"]`)
        
        
        for (let j=0; j < rowItems.length - 2; j++) {
            let matchOne = rowItems[j].textContent;
            let matchTwo = rowItems[j + 1].textContent;
            let matchThree = rowItems[j + 2].textContent;
            
            if(matchOne === matchTwo && matchOne === matchThree) {               
                
                for (let k=j; k < rowItems.length; k++) {                   
                    if(matchOne===rowItems[k].textContent) {
                        rowItems[k].textContent = " ";
                    } else {
                        break
                    }
                }
            }
        }
    }
}

// Coincidencias VERTICALES

const vMatch = width => {

    for (let i = 0; i < width; i++) {
        let colItems = document.querySelectorAll(`[data-col="${i}"]`)
        
        for (let j=0; j < colItems.length - 2; j++) {

            let matchOne = colItems[j].textContent;
            let matchTwo = colItems[j + 1].textContent;
            let matchThree = colItems[j + 2].textContent;

            if(matchOne === matchTwo && matchOne === matchThree) {               
                
                for (let k=j; k < colItems.length; k++) {                   
                    if(matchOne===colItems[k].textContent) {
                        colItems[k].textContent = " ";
                    } else {
                        break
                    }
                }
            }
        }
    }
}

/**************
* 
*       RELLENAR ESPACIOS VACÍOS 
* 
**************/

const fill = width => {
    //Recorremos el tablero de atrás para adelante
    for (let i = width ; i >= 0; i--) {
        // Capturamos en un array todos los data-col
        let colItems = document.querySelectorAll(`[data-col="${i}"]`)
    //     // Iteramos las columnas de a una
        for (let j=colItems.length - 1; j >= 0; j--) {
            let emptyItem = colItems[j].textContent;
            // si uno de los elementos está vacīo
            if(emptyItem === " ") {  
                // comenzamos a iterar 
                for (let k=j; k > colItems.length - j; k--) { 
                    console.log("funciona")                                           
                    if(colItems[k] !== " ") {
                        console.log("if2")

                        colItems[k].textContent = emptyItem;
                        emptyItem = colItems[k].textContent;
                    } else {
                        break
                    }
                }

            // } else {
            //     break
            }

                // console.log(colItems[j])
                
            
        }
    }
}