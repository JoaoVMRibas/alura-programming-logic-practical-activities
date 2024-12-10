let listFriend = [];
let randomNumbers = [];
let randomSelectedFriends = [];

function add() {
    let friend = document.getElementById("nome-amigo").value;
    let includedFriend = document.getElementById("lista-amigos");
    
    if(includedFriend.textContent == ""){
        includedFriend.textContent = friend;
    }else {
        includedFriend.textContent += `, ${friend}`;
    }
    listFriend.push(friend);
    document.getElementById("nome-amigo").value = "";
}

function draw() {
    let result = document.getElementById("lista-sorteio");
    
    for(let i = 0; i< listFriend.length; i++){
        randomNumbers[i] = getRandomNumber(0,listFriend.length, i, randomNumbers);
        randomSelectedFriends[i] = listFriend[randomNumbers[i]];
        
        if(result.textContent == ""){
            result.innerHTML =`${listFriend[i]} -> ${randomSelectedFriends[i]}`;
        }else{
            result.innerHTML += `<br>${listFriend[i]} -> ${randomSelectedFriends[i]}`;
        }
    }
}

function getRandomNumber(numMin, numMax, currentPosition, listRandomNumber) {
    let randomNumber = Math.floor(Math.random() * (numMax - numMin)) + numMin;
    if((listRandomNumber.includes(randomNumber)) || (currentPosition == randomNumber)){
        randomNumber = getRandomNumber(numMin, numMax, currentPosition, listRandomNumber);
    }
    return randomNumber;
}

function restart() {
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
    listFriend = [];
    randomNumbers = [];
    randomSelectedFriends = [];
}