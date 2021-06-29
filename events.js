

/****
 * 
 * CALLBACK DEL EVENTO ONCLICK
 * 
 ****/  

// CALLBACK del evento click

let itemClicked = [];  // lista de data-value capturados al hacer click
let targetsArray = []; // lista de target capturados al hacer click (div item)
let oldValue;
let newValue;

const select = e => {
    let dataValue = e.target.getAttribute("data-value");
    if(itemClicked.length===0) {
        e.target.classList.add("selected");
        itemClicked.push(dataValue);
        targetsArray.push(e.target);
    } 
    else if (itemClicked.length===1){
        e.target.classList.add("selected");
        itemClicked.push(dataValue);
        targetsArray.push(e.target);

        targetsArray[0].innerHTML = itemClicked[1];
        targetsArray[1].innerHTML = itemClicked[0];
    }       
    else if (itemClicked.length===2) {    
        for(let i=0; i<itemClicked.length ; i++) {
            targetsArray[i].classList.remove("selected");
        }
        e.target.classList.add("selected");       
        itemClicked = [];
        targetsArray = [];
        itemClicked.push(dataValue); 
        targetsArray.push(e.target);                   
    }
}

 // MOVIMIENTOS PERMITIDOS EN NIVEL DIFICIL


 
let matchMove = true;

for (let i=0 ; i<width ; i++) {
     
    let movAllow = [id-1,id+1,id-width,id+width];
    let idItem = document.getElementById("i");
    if (movAllow.includes(id))
    

    
}
moveAllow;
// if(!matchMove) {
//     return
// } else if (moveAllow.includes()){
    

// }
//     e.target.classList.add("selected");


console.log("ok")
}

