function adicionar() {
    //Product that should be added to the shopping cart
    let product = document.getElementById("produto").value;
    let productParts = product.split(" - ");
    let productName = productParts[0];
    let productPrice = productParts[1];
    let qtProduct = document.getElementById("quantidade").value;

    //Create a new HTML span for quantity
    let newSpanQt = document.createElement("span");
    newSpanQt.className = "texto-azul";
    newSpanQt.textContent = `${qtProduct}x`;

    //Create product name text
    let productText = document.createTextNode(` ${productName} `);    

    //Create a new HTML span for price
    let newSpanPrice = document.createElement("span");
    newSpanPrice.className = "texto-azul";
    newSpanPrice.textContent = `${productPrice}`;

    //Create new HTML section
    let newSection = document.createElement("section");
    newSection.className = "carrinho__produtos__produto"
    //Assigns the span as a child of the section
    newSection.appendChild(newSpanQt);
    newSection.appendChild(productText);
    newSection.appendChild(newSpanPrice);

    //Find Shopping cart Product List
    let listProducts = document.getElementById("lista-produtos");

    //Find the last HTML section
    let listSections = listProducts.querySelector(".carrinho__produtos__produto");

    //Tests if there are sections
    if(listSections != null){
        let lastSection = listSections[listSections.length - 1];

        //Inserts new section after the last section found
        listProducts.insertBefore(newSection,lastSection);

        //Calculate total price
        let total = document.getElementById("valor-total");
        let totalNumber = parseInt(total.textContent.replace("R$",""));
        totalNumber += (parseInt(productPrice.replace("R$",""))*parseInt(qtProduct));
        total.textContent = `R$${totalNumber}`;
    }else {
        listProducts.appendChild(newSection);

        let total = document.getElementById("valor-total");
        let totalNumber = parseInt(total.textContent.replace("R$",""));
        totalNumber += (parseInt(productPrice.replace("R$",""))*parseInt(qtProduct));
        total.textContent = `R$${totalNumber}`;
    }
}

function limpar() {
    
}