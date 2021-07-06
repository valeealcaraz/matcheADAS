/*************
* 
* CALLBACK DEL EVENTO ONCLICK
* 
*************/

let itemClicked = [];  // lista de text-content capturados al hacer click
let targetsArray = []; // lista de target capturados al hacer click (div item)
// let idItems = [];
let cols = [];
let rows = [];
let widthUsable;

const intercambio = () => {
    targetsArray[0].innerHTML = itemClicked[1];
    targetsArray[1].innerHTML = itemClicked[0];
}


// Esto lo declaramos como variable universal para tener el ancho de nuestro tablero disponible (que inicialmente está en el scope de la función createBoard). Antes funcionaba, ahora ya no :(

const select = e => {
    // widthUsable = Math.sqrt(itemsArray.length); 
    let targetContent = e.target.textContent;
    // let idItem = parseInt(e.target.getAttribute("id"));
    cols.push(e.target.getAttribute("data-col"))
    rows.push(e.target.getAttribute("data-row"))
    let movAllow = () => {
        const dataXOne = parseInt(targetsArray[0].dataset.row);
        const dataYOne = parseInt(targetsArray[0].dataset.col);
        const dataXTwo = parseInt(targetsArray[1].dataset.row);
        const dataYTwo = parseInt(targetsArray[1].dataset.col);
        if (dataXOne === dataXTwo) {
            console.log("same row")
            return (dataYOne === dataYTwo - 1) || (dataYOne === dataYTwo + 1);
        } else if (dataYOne === dataYTwo) {
            console.log("same column")
            return (dataXOne === dataXTwo - 1) || (dataXOne === dataXTwo + 1);
        } else {
            return false
        }
    }
    //primer click
    if (itemClicked.length === 0) {
        e.target.classList.add("selected");
        itemClicked.push(targetContent);
        targetsArray.push(e.target);
    }
    //segundo click
    else if (itemClicked.length === 1) {
        e.target.classList.add("selected");
        itemClicked.push(targetContent);
        targetsArray.push(e.target);
        movAllow();
        if(movAllow = true) {
            intercambio();
            hMatch()
        }
        else {
            targetsArray[0].classList.remove("selected");
            console.log('no')
        }
    }
    //tercer click      
    else if (itemClicked.length === 2) {
        for (let i = 0; i < itemClicked.length; i++) {
            targetsArray[i].classList.remove("selected");
        }
        e.target.classList.add("selected");
        itemClicked = [];
        targetsArray = [];
        itemClicked.push(targetContent);
        targetsArray.push(e.target);
    }
    // vMatch()
}


