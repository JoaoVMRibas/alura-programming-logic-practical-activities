let randomNumbers = [];
let resultText = "";

function draw() {
    let qtNum = parseInt(document.getElementById("quantidade").value);
    let initialNum = parseInt(document.getElementById("de").value);
    let finalNum = parseInt(document.getElementById("ate").value);

    if (qtNum >= finalNum) {
        alert(`Quantidade de números sorteados (${qtNum}) deve ser menor que o intervalo entre o valor inicial (${initialNum}) até o final (${finalNum}).`);
        return;
    }

    for(let i = 0; i< qtNum; i++){
        randomNumbers[i] = getRandomNumber(initialNum,finalNum,randomNumbers);
    }

    resultText = "Números sorteados: " + randomNumbers;
    document.getElementById("result").textContent = resultText;

    changeStatusButton();
}

function getRandomNumber(numMin, numMax, listRandomNumber) {
    let randomNumber = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    if(listRandomNumber.includes(randomNumber)){
        randomNumber = getRandomNumber(numMin, numMax, listRandomNumber);
    }
    return randomNumber;
}

function restart() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    randomNumbers = [];
    resultText = "Números sorteados: nenhum até agora";
    document.getElementById("result").textContent = resultText;
    changeStatusButton();
}

function changeStatusButton() {
    let button = document.getElementById("btn-reiniciar");
    button.className = (button.classList.contains("container__botao-desabilitado")) ? "container__botao" : "container__botao-desabilitado";
}