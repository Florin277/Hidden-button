let click = 0;
let changeText = 0;

function buttonOneFunction() {  
    if (click == 3) {
        ++changeText;
        click = 0;
    }
    if (changeText % 3 == 0) {
        document.getElementById("first").innerText="Castigator";
        document.getElementById("second").innerText="";
        document.getElementById("third").innerText="";
    } else {
        document.getElementById("first").innerText="Necastigator";
        document.getElementById("second").innerText="";
        document.getElementById("third").innerText="";
    }
    ++click;
}

function buttonTwoFunction() {
    if (click == 3) {
        ++changeText;
        click = 0;
    }
    if (changeText % 3 == 1) {
        document.getElementById("second").innerText="Castigator";
        document.getElementById("first").innerText=" ";
        document.getElementById("third").innerText="";
    } else {
        document.getElementById("second").innerText="Necastigator";
        document.getElementById("first").innerText=" ";
        document.getElementById("third").innerText="";
    }      
    ++click; 
}

function buttonThreeFunction() {
    if (click == 3) {
        ++changeText;
        click = 0;
    }
    if (changeText % 3 == 2) {
        document.getElementById("third").innerText ="Castigator";
        document.getElementById("first").innerText="";
        document.getElementById("second").innerText="";
    } else {
        document.getElementById("third").innerText ="Necastigator";
        document.getElementById("first").innerText="";
        document.getElementById("second").innerText="";
    }
    ++click;
}