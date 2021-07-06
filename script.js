const board = document.getElementById("board");
const animals = ['🐶','🐱','🐰','🦊','🐷','🐸'];
let width;

const createBoard = width => {
    let itemWidth = 504/width;

    for(let row = 0; row < width; row++) {
        for (let col = 0 ; col < width ; col++) {
            let item = document.createElement("div");
            let animalRandom = animals[Math.floor(Math.random() * animals.length)]
            let inItem = document.createTextNode(animalRandom);
            board.appendChild(item);
            item.appendChild(inItem);
            board.classList.add("board")
            item.style.display = "flex";
            item.style.alignItems = "center";
            item.style.justifyContent = "center";
            item.style.width = `${itemWidth}px`;
            item.style.height = `${itemWidth}px`;
            item.style.fontSize = `${itemWidth/1.5}px`;
            item.classList.add("item");
            item.setAttribute("id",col);
            item.dataset.col = col;
            item.dataset.row = row;
            cols.push(col);
            rows.push(row);
            item.addEventListener("click", select); 
        }      
    }
}
    
createBoard()



