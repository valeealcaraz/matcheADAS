/*************
* 
* CALLBACK DEL EVENTO ONCLICK
* 
*************/  

let itemClicked = [];  // lista de text-content capturados al hacer click
let targetsArray = []; // lista de target capturados al hacer click (div item)
let idItems = [];
let widthUsable;

// Esto lo declaramos como variable universal para tener el ancho de nuestro tablero disponible (que inicialmente está en el scope de la función createBoard). Antes funcionaba, ahora ya no :(
    
const select = e => {
    widthUsable = Math.sqrt(itemsArray.length); 
    let targetContent = e.target.textContent;
    let idItem = parseInt(e.target.getAttribute("id"));
    let movAllow = [idItem-1,idItem+1,idItem-widthUsable,idItem+widthUsable];
    idItems.push(idItem);
    //primer click
    if(itemClicked.length===0) {
        e.target.classList.add("selected");
        itemClicked.push(targetContent);
        targetsArray.push(e.target);
    } 
    //segundo click
    else if (itemClicked.length===1){
        let firstItemId = parseInt(targetsArray[0].getAttribute("id"));
      
        e.target.classList.add("selected");
        itemClicked.push(targetContent);
        targetsArray.push(e.target);
        
        if(movAllow.includes(firstItemId)) {
            intercambio();
            actualizador();
            hMatch()
            // console.log(itemsArray)
            // console.log(idItems[0])
        }
        else{
            targetsArray[0].classList.remove("selected");
            console.log('no')
        }
        idItems = []
    } 
    //tercer click      
    else if (itemClicked.length===2) {    
        for(let i=0; i<itemClicked.length ; i++) {
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


