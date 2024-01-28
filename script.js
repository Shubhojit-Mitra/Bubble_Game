var timer = 60
var score = 0;
var hit = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}

function updateHitValue() {
    hit = Math.floor(Math.random() * 10)
    document.querySelector('#hitValue').textContent = hit;
}

function makeBubble(){
    var clutter = ""

    for (let i = 1; i <= 136; i++){
        var num = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${num}</div>`;
    }

    document.querySelector("#panelbottom").innerHTML = clutter;
}

function runTimer(){
    let timerInterval = setInterval(function(){
        if (timer > 0){
            timer--;
            document.querySelector("#timerValue").innerHTML = timer;
        }
        else {
            clearInterval(timerInterval);
            document.querySelector('#panelbottom').innerHTML = `<h1>GAME OVER</h1>`;
        }
    }, 1000)
}

document.querySelector("#panelbottom").addEventListener("click", function(details){
    var clicked = Number(details.target.textContent);
    if (clicked === hit){
        increaseScore();
        makeBubble();
        updateHitValue();
    }
})





runTimer()
makeBubble();
updateHitValue();
