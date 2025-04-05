let buttonColors = document.getElementById("button");
let click = 0;
const TENSECONDS_MS = 1000;
const colors = ["yellow", "green", "red"];

function changeColor() {
    buttonColors.changeColor = function() {
        buttonColors.style.background = colors[click % 3];
        ++click;
    }
}

changeColor();

setInterval(function() {
    buttonColors.onclick();
}, TENSECONDS_MS);
