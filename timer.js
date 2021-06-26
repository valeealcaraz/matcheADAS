
const divTimer = document.getElementById("timer");
const timerIconDiv = document.createElement("div");
const timerIcon = document.createElement("i")
const timerSpan = document.createElement("span");

const crearCronometro = tiempo => {
    let text = "00:00";
    const timerSpanText = document.createTextNode(text);
    timerSpan.appendChild(timerSpanText);

    for (let i=10 ; i>=tiempo ; i++) {
        setInterval(() => {
            return tiempo
        }, 1000);
    }

}

crearCronometro(30)





document.body.appendChild(divTimer);
divTimer.appendChild(timerIconDiv);
timerIconDiv.appendChild(timerIcon);
divTimer.appendChild(timerSpan);

divTimer.classList.add("timer")
timerIconDiv.classList.add("flex-center50")
timerIconDiv.classList.add("flex-center50")
timerIcon.classList.add("fas")
timerIcon.classList.add("fa-hourglass-half")
timerSpan.classList.add("flex-center50")





