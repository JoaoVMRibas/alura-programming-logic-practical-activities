function buy() {
    let ticketType = document.getElementById("tipo-ingresso").value;
    let qtTicket = parseInt(document.getElementById("qtd").value);
    let availableP = parseInt(document.getElementById("qtd-pista").textContent);
    let availableS = parseInt(document.getElementById("qtd-superior").textContent);
    let availableI = parseInt(document.getElementById("qtd-inferior").textContent);

    switch (ticketType){
        case "inferior":
            calculateRemainingTickets(qtTicket, availableI,ticketType);
            break;
        case "superior":
            calculateRemainingTickets(qtTicket, availableS,ticketType);
            break;
        case "pista":
            calculateRemainingTickets(qtTicket, availableP,ticketType);
            break;
        default:
            break;
    }   
}

function calculateRemainingTickets(qtTicket, availableTickets, ticketType) {
    if(qtTicket <= availableTickets){
        let remainingTickets = availableTickets - qtTicket;
        document.getElementById(`qtd-${ticketType}`).textContent = `${remainingTickets}`;
    }else{
        alert("Quantidade indisponível.")
    }
}
