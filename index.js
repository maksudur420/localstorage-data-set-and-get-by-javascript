const addProduct =()=>{
     
    const nameField = document.getElementById('productName');
    const quantityField = document.getElementById('productQuantity');
    const productName = nameField.value;
    const productQuantity = quantityField.value;
    nameField.value ="";
    quantityField.value ="";

    
    displayProduct(productName,productQuantity);
    saveTotalStoreProduct (productName,productQuantity)

}


const displayProduct=(Name,Quantity)=>{
    const container = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${Name}:${Quantity}`;
    container.appendChild(li);
}

const getStoredShoppingCart =()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;

}

const saveTotalStoreProduct =(product,quantity)=>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const productStringify = JSON.stringify(cart);
    localStorage.setItem('cart',productStringify)
}

const displayStoreCart =() =>{
    const browserData = getStoredShoppingCart();
    console.log(browserData)
    for (const product in browserData) {
        const quantity = browserData[product ];
        displayProduct(product,quantity);

    }
}
displayStoreCart();