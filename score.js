// *********************************
// *** Variable Settings of Score***
// *********************************
let score = 0;
let scoreSpan = document.getElementById("score");

// *********************************
// *** Score Add Function***
// ********************************
const scoreAdd = () =>{
    score += 100
    scoreSpan.innerHTML = `${score}`;
}


