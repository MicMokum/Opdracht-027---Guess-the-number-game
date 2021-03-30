
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

let i = 1;
while (i < 100) {
    randomNumber = getRandomInt(0, 25);
    console.log(i, randomNumber);
    i++;
};
