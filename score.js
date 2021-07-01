const divScore = document.getElementById("score");
divScore.classList.add("timer");
divScore.classList.add("display-none");

const scoreIconDiv = document.createElement("div");
scoreIconDiv.classList.add("flex-center50");

const scoreIcon = document.createElement("i");
scoreIcon.classList.add("fas");
scoreIcon.classList.add("fa-star");

const scoreSpan = document.createElement("span");
scoreSpan.classList.add("flex-center50");

let score = 0;
let scoreSpanText = document.createTextNode(score);

document.body.appendChild(divScore);
divScore.appendChild(scoreIconDiv);
scoreIconDiv.appendChild(scoreIcon);
divScore.appendChild(scoreSpan);

const scoreAdd = () =>{
    score += 100
    scoreSpan.innerHTML = `${score}`;
}
