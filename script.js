const board = document.getElementById("board");
const itemsArray = [];
const animals = ['🐶','🐱','🐰','🦊','🐷','🐸'];
let width;

const createBoard = width => {
    let itemWidth = 504/width;
    // let matchMove = true;
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
        item.style.width = `${itemWidth}px`;
        item.style.height = `${itemWidth}px`;
        item.style.fontSize = `${itemWidth/1.5}px`;
        item.setAttribute("data-value",animalRandom);
        item.setAttribute("id",i);
        item.addEventListener("click", select) 
    }   
    hMatch()
    vMatch()
}
    
createBoard()

// MOVIMIENTOS PERMITIDOS EN NIVEL DIFICIL  
     
       // let moveAllow = [id-1,id+1,id-width,id+width];