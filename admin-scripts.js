document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productDescription = document.getElementById('product-description').value;
    const productImage = document.getElementById('product-image').value;

    const productList = document.getElementById('product-list');
    
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <h4>${productName}</h4>
        <p>Price: $${productPrice}</p>
        <p>${productDescription}</p>
        <img src="${productImage}" alt="${productName}" width="100">
        <button class="delete-btn">Delete</button>
    `;

    productList.appendChild(productItem);

    // Clear the form
    document.getElementById('add-product-form').reset();

    // Add delete functionality
    productItem.querySelector('.delete-btn').addEventListener('click', function() {
        productList.removeChild(productItem);
    });
});
