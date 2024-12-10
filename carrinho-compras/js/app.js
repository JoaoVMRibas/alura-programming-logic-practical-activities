function add() {
    let product = document.getElementById("produto").value;
    let qtProduct = document.getElementById("quantidade").value;

    let newHTML = createHTMLForNewProduct(product,qtProduct);

    let listProducts = document.getElementById("lista-produtos");
    let listSections = listProducts.querySelector(".carrinho__produtos__produto");

    if(listSections != null){
        let lastSection = listSections[listSections.length - 1];
        listProducts.insertBefore(newHTML,lastSection);
        updateTotalPrice(product,qtProduct);
    }else {
        listProducts.appendChild(newHTML);
        updateTotalPrice(product,qtProduct);
    }
}

function createHTMLForNewProduct(prod, qtProd) {
    let productName = getProductName(prod);
    let productPrice = getProductPrice(prod);
    let subTotal = productPrice * parseInt(qtProd);

    let newSpanQt = document.createElement("span");
    newSpanQt.className = "texto-azul";
    newSpanQt.textContent = `${qtProd}x`;

    let productText = document.createTextNode(` ${productName} `);    

    let newSpanPrice = document.createElement("span");
    newSpanPrice.className = "texto-azul";
    newSpanPrice.textContent = `R$${subTotal}`;

    let newSection = document.createElement("section");
    newSection.className = "carrinho__produtos__produto"
    
    newSection.appendChild(newSpanQt);
    newSection.appendChild(productText);
    newSection.appendChild(newSpanPrice);

    return newSection;
}

function updateTotalPrice(prod, qtProd) {
    let prodPrice = getProductPrice(prod);
    let total = document.getElementById("valor-total");
    let totalNumber = parseInt(total.textContent.replace("R$",""));
    totalNumber += (prodPrice*parseInt(qtProd));
    total.textContent = `R$${totalNumber}`;
}

function getProductName(prod) {
    let productParts = prod.split(" - ");
    let prodName = productParts[0];
    return prodName;
}

function getProductPrice(prod) {
    let productParts = prod.split("R$");
    let prodPrice = parseInt(productParts[1]);
    return prodPrice;
}

function clean() {
    let listProducts = document.getElementById("lista-produtos");
    listProducts.textContent = "";
    let total = document.getElementById("valor-total");
    total.textContent = "R$0";
}