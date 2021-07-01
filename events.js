/****
* 
* CALLBACK DEL EVENTO ONCLICK
* 
****/  

let itemClicked = [];  // lista de data-value capturados al hacer click
let targetsArray = []; // lista de target capturados al hacer click (div item)
let oldValue;
let newValue;

const select = e => {
    let dataValue = e.target.getAttribute("data-value");
    let widthUsable = Math.sqrt(itemsArray.length);
    let idItem = parseInt(e.target.getAttribute("id"));
    let movAllow = [idItem-1,idItem+1,idItem-widthUsable,idItem+widthUsable];
    //primer click
    if(itemClicked.length===0) {
        e.target.classList.add("selected");
        itemClicked.push(dataValue);
        targetsArray.push(e.target);
    } 
    //segundo click
    else if (itemClicked.length===1){
        e.target.classList.add("selected");
        itemClicked.push(dataValue);
        targetsArray.push(e.target);
        
        let firstItem = parseInt(targetsArray[0].getAttribute("id"));

        if(movAllow.includes(firstItem)) {
            targetsArray[0].innerHTML = itemClicked[1];
            targetsArray[1].innerHTML = itemClicked[0];
            console.log('ok')
        }else{
            targetsArray[0].classList.remove("selected");
            console.log('no')
        }
    } 
    //tercer click      
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


window.setInterval(function(){
    hMatch()
    vMatch()
},5000)
