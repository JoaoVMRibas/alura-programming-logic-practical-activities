let randomNumbers = [];
let resultText = "";

function draw() {
    let qtNum = parseInt(document.getElementById("quantidade").value);
    let initialNum = parseInt(document.getElementById("de").value);
    let finalNum = parseInt(document.getElementById("ate").value);

    for(let i = 0; i< qtNum; i++){
        randomNumbers[i] = getRandomNumber(initialNum,finalNum);
    }

    resultText = "Números sorteados: " + randomNumbers;
    document.getElementById("result").textContent = resultText;

    document.querySelector("#btn-reiniciar").disabled = false;
    document.getElementById("btn-reiniciar").style.background = "#1875E8";
    document.getElementById("btn-reiniciar").style.cursor = "pointer";
}

function getRandomNumber(numMin, numMax) {
    return  Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;   
}

function restart() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    randomNumbers = [];
    resultText = "Números sorteados: nenhum até agora";
    document.getElementById("result").textContent = resultText;
    document.querySelector("#btn-reiniciar").disabled = true;
    document.getElementById("btn-reiniciar").style.background = "#6f6f70";
    document.getElementById("btn-reiniciar").style.cursor = "not-allowed";
}