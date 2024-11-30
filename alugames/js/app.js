function alterarStatus(gameID) {
    let game = document.getElementById(`game-${gameID}`); 
    let img = game.querySelector(".dashboard__item__img"); 
    let button = game.querySelector(".dashboard__item__button"); 
    toggleImage(img);
    toggleButton(button);
}

function toggleButton(button) {
    if(!(button.classList.contains("dashboard__item__button--return"))){ 
        button.classList.add("dashboard__item__button--return");
        button.textContent = "Devolver";
    }else {
        button.classList.remove("dashboard__item__button--return");   
        button.textContent = "Alugar";
    }
}

function toggleImage(image) {
    if(!(image.classList.contains("dashboard__item__img--rented"))){ 
        image.classList.add("dashboard__item__img--rented");
    }else {
        image.classList.remove("dashboard__item__img--rented");
    }
}