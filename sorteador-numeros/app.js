function draw() {
    let qtNum = parseInt(document.getElementById("quantidade").value);
    let initialNum = parseInt(document.getElementById("de").value);
    let finalNum = parseInt(document.getElementById("ate").value);

    let randomNumbers = [];
    for(let i = 0; i< qtNum; i++){
        randomNumbers[i] = getRandomNumber(initialNum,finalNum);
    }

    let resultText = "Números sorteados: " + randomNumbers;
    document.getElementById("result").textContent = resultText;
}

function getRandomNumber(numMin, numMax) {
    return  Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;   
}

function restart() {
    
}