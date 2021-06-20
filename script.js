const board = document.getElementById("board");


const animals = ['🐶','🐱','🐰','🦊','🐷','🐸']

const createBoard = width => {
    let itemWidth = 504/width;

    for (i=0 ; i<width*width ; i++) {
        let item = document.createElement("div");

        let animalRandom = animals[Math.floor(Math.random() * animals.length)]


        let inItem = document.createTextNode(animalRandom);

        
        board.appendChild(item);
        item.appendChild(inItem);
        
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.justifyContent = "center";
        item.style.backgroundColor = "red";
        item.style.width = `${itemWidth}px`;
        item.style.height = `${itemWidth}px`;
        
        item.style.fontSize = `${itemWidth/1.5}px`;

        

    }
}

console.log(createBoard(5))



 

