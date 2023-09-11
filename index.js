const addProduct =()=>{
     
    const nameField = document.getElementById('productName');
    const quantityField = document.getElementById('productQuantity');
    const productName = nameField.value;
    const productQuantity = quantityField.value;
    nameField.value ="";
    quantityField.value ="";

    
    displayProduct(productName,productQuantity);

}


const displayProduct=(Name,Quantity)=>{
    const container = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${Name}:${Quantity}`;
    container.appendChild(li);
}