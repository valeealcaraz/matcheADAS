/************
* 
* CALLBACK DEL EVENTO ONCLICK
* 
*************/

let itemClicked = [];  // lista de text-content capturados al hacer click
let targetsArray = []; // lista de target capturados al hacer click (div item)

// clicked items interchange
const swap = () => {
    targetsArray[0].innerHTML = itemClicked[1];
    targetsArray[1].innerHTML = itemClicked[0];
}

const select = e => {
    let targetContent = e.target.textContent;
    
    // allowed movements
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

    // first click
    if (itemClicked.length === 0) {
        e.target.classList.add("selected");
        itemClicked.push(targetContent);
        targetsArray.push(e.target);
    }
    // second click
    else if (itemClicked.length === 1) {
        e.target.classList.add("selected");
        itemClicked.push(targetContent);
        targetsArray.push(e.target);        
        if(movAllow()) {
            swap();
            hMatch(width);
            vMatch(width);
            fill(width);
            targetsArray[0].classList.remove("selected");
            targetsArray[1].classList.remove("selected");
        }
        else {
            targetsArray[0].classList.remove("selected");
        }
    }
    // third click      
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

