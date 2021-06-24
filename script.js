const board = document.getElementById("board");
const itemsArray = [];
const animals = ['🐶','🐱','🐰','🦊','🐷','🐸'];


let contador = 0;

const createBoard = width => {
    let itemWidth = 504/width;
    for (let i=0 ; i<width*width ; i++) {
        let item = document.createElement("div");
        let animalRandom = animals[Math.floor(Math.random() * animals.length)]
        let inItem = document.createTextNode(animalRandom);
        
        board.appendChild(item);
        item.appendChild(inItem);
        itemsArray.push(item);
        
        board.classList.add("board")
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.justifyContent = "center";
        //item.style.backgroundColor = "rgb(214, 181, 243)";
        item.style.width = `${itemWidth}px`;
        item.style.height = `${itemWidth}px`;
        item.style.fontSize = `${itemWidth/1.5}px`;
        item.setAttribute("id",i)
        //item.addEventListener("click",select)   // ESTO LO VEO DESPUÉS
        
    }
}

createBoard(8)


