const board = document.getElementById("board");
const itemsArray = [];
const animals = ['🐶','🐱','🐰','🦊','🐷','🐸'];

let contador = 0;

const createBoard = width => {
    let itemWidth = 504/width;
    let matchMove = true;

    for (let i=0 ; i<width*width ; i++) {
        item = document.createElement("div");

        let animalRandom = animals[Math.floor(Math.random() * animals.length)]
        let inItem = document.createTextNode(animalRandom);
        
        
        board.appendChild(item);
        item.appendChild(inItem);
        itemsArray.push(inItem);
        
        board.classList.add("board")
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.justifyContent = "center";
        //item.style.backgroundColor = "rgb(214, 181, 243)";
        item.style.width = `${itemWidth}px`;
        item.style.height = `${itemWidth}px`;
        item.style.fontSize = `${itemWidth/1.5}px`;
        
        item.setAttribute("data-value",animalRandom);
        let id = item.setAttribute("id",i);

// MOVIMIENTOS PERMITIDOS EN NIVEL DIFICIL  
     
        let moveAllow = [id-1,id+1,id-width,id+width];
     
        item.addEventListener("click", select) 
           
        
    }
    
    hMatch()
    vMatch()
    
}


let itemClicked = [];
let dataValue;

const select = e => {
    dataValue = e.target.getAttribute("data-value");
    
    if(itemClicked.length<2) {
        e.target.classList.add("selected");
        itemClicked.push(dataValue);
    } else {
        itemClicked = [];
        for(let i=0; i<itemClicked ; i++) {
            e.target.classList.remove("selected");
        }
        itemClicked.push(dataValue);
        
    }

    console.log(itemClicked)
}



createBoard()