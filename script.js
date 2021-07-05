const board = document.getElementById("board");
let itemsArray = [];
const animals = ['🐶','🐱','🐰','🦊','🐷','🐸'];
let width;

const createBoard = width => {
    let itemWidth = 504/width;

    for (let y=0 ; y<width ; y++) {
        for(let x = 0; x < width; x++) {
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
            // item.style.position = "relative";
            
            // item.setAttribute("data-value",animalRandom);
            item.setAttribute("id",x);
            item.dataset.x = x;
            item.dataset.y = y;
            item.addEventListener("click", select); 

        }      
    }   
}
    
createBoard()

