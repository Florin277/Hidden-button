const text = ['Unwinner', 'Unwinner','Unwinner'];
const buttons = document.getElementsByTagName('button');
let buttonPressed = 0;
let numberPresses = 0;
let winner = 0;

function pressButton(buttonId) {
    buttons[buttonPressed].innerHTML="";
    let x = parseInt(buttonId);
    buttonPressed = x;
    if (numberPresses % 3 == 0) {
        text[winner] = "Unwinner";
        winner = getRandomInt(3);
        text[winner] = "Winner";
    }
    ++numberPresses;
    buttons[buttonPressed].innerHTML=text[buttonPressed];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
