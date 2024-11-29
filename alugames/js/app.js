function alterarStatus(gameNumber) {
    let game;
    let button;
    let img;
    switch (gameNumber) {
        case 1:
            game = document.getElementById(`game-${gameNumber}`);
            img = game.querySelector(".dashboard__item__img");
            button = game.querySelector(".dashboard__item__button");
            toggleImage(img);
            toggleButton(button);            
            break;
        case 2:
            game = document.getElementById(`game-${gameNumber}`);
            img = game.querySelector(".dashboard__item__img");
            button = game.querySelector(".dashboard__item__button");
            toggleImage(img);
            toggleButton(button);            
            break;
        case 3:
            game = document.getElementById(`game-${gameNumber}`);
            img = game.querySelector(".dashboard__item__img");
            button = game.querySelector(".dashboard__item__button");
            toggleImage(img);
            toggleButton(button);            
            break;
        default:
            break;
    }
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