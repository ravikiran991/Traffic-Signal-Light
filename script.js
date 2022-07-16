let stopLight = document.getElementById('stopLight');
let readyLight = document.getElementById('readyLight');
let goLight = document.getElementById('goLight');
let stopButton = document.getElementById('stopButton');
let readyButton = document.getElementById('readyButton');
let goButton = document.getElementById('goButton');

function colorRed() {
    stopButton.style.backgroundColor = "#cf1124";
    readyButton.style.backgroundColor = "#1f1d41";
    goButton.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#cf1124";
    goLight.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
}

function colorYellow() {
    readyButton.style.backgroundColor = "#f7c948";
    stopButton.style.backgroundColor = "#1f1d41";
    goButton.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#f7c948";
    goLight.style.backgroundColor = "#4b5069";
    stopLight.style.backgroundColor = "#4b5069";
}

function colorBlue() {
    goButton.style.backgroundColor = "#86d2f2";
    readyButton.style.backgroundColor = "#1f1d41";
    stopButton.style.backgroundColor = "#1f1d41";
    goLight.style.backgroundColor = "#86d2f2";
    stopLight.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
}