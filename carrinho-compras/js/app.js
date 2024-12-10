function adicionar() {
    //Product that should be added to the shopping cart
    let product = document.getElementById("produto").value;
    let productParts = product.split(" - ");
    let productName = productParts[0];
    let productPrice = productParts[1];
    let qtProduct = document.getElementById("quantidade").value;

    //Shopping cart Product List
    let listProducts = document.getElementById("lista-produtos");

    //Find the last HTML section
    let listSections = listProducts.querySelector(".carrinho__produtos__produto");
    let lastSection = listSections[listSections.length - 1];

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

    //Inserts new section after the last section found
    listProducts.insertBefore(newSection,lastSection);
}

function limpar() {
    
}