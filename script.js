const text = ['Necastigator', 'Necastigator','Necastigator'];
var buttons = document.getElementsByTagName('button');
let pressed = 0;
let click = 0;
let winner = 0;

for (var i = 0; i < buttons.length; i++) {
    (function (i) {
        buttons[i].onclick = function () {
            if (click % 3 == 0) {
                text[winner] = "Necastigator";
                winner = getRandomInt(3);
                text[winner] = "Castigator";
            }
            buttons[pressed].innerHTML="";
            buttons[i].innerHTML = text[i];
            pressed = i;
            ++click;
        }
    }(i)); 
}

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}