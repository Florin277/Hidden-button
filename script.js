const text = ['Necastigator', 'Necastigator','Necastigator'];
const buttons = document.getElementsByTagName('button');
let pressed = 0;
let click = 0;
let winner = 0;

function pressButton(buttonId) {
    buttons[pressed].innerHTML="";
    let x = parseInt(buttonId);
    pressed = x;
    if (click % 3 == 0) {
        text[winner] = "Necastigator";
        winner = getRandomInt(3);
        text[winner] = "Castigator";
    }
    ++click;
    buttons[pressed].innerHTML=text[pressed];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
