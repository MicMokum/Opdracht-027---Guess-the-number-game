const playerName = prompt("Welkom! Wat is je naam?");

alert("Hey " + playerName);

const minNumber = prompt("minimum nummer...");
const maxNumber = prompt("maximum nummer...");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

var winningNumber = getRandomInt(minNumber, maxNumber);
console.log("(debug) Winning number: ", winningNumber);

var keepOnPlaying = true;
var numberOfTries = 0;
const ultimateQuestion = "Voer een nummer in van " + minNumber + " tot " + maxNumber + " om te beginnen met raden...";
while (keepOnPlaying) {
    var playerGuess = prompt(ultimateQuestion);
    console.log("(debug) Player guess: ", playerGuess);
    if (playerGuess == winningNumber) {
        alert("Gefeliciteerd je hebt gewonnen")
        keepOnPlaying = false;
    } else {
        alert("Dat is niet correct");
    };
    numberOfTries++;
    if (numberOfTries == 5) {
        alert("Helaas, na " + numberOfTries + " pogingen nog steeds niet geraden. Je verliest");
        keepOnPlaying = false;
    };
};

alert("Dag " + playerName)
