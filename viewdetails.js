document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        alert('Product ID is missing!');
        window.location.href = 'allproducts.html'; 
        return;
    }

    try {
        const response = await fetch('getproduct.php?id=' + productId);
        const product = await response.json();

        if (product.success) {
            const detailsContainer = document.getElementById('product-details');
            detailsContainer.innerHTML = `
                <div class="product-image">
                    <img src="${product.data.image}" alt="Product Image">
                </div>
                <div class="product-info">
                    <h2>${product.data.name}</h2>
                    <p><strong>Description:</strong> ${product.data.description}</p>
                    <p><strong>Composition:</strong> ${product.data.composition}</p>
                    <p><strong>Side Effects:</strong> ${product.data.sideEffects}</p>
                    <p><strong>Expired:</strong> ${product.data.expired}</p>
                    <p><strong>Code:</strong> ${product.data.code}</p>
                    <p><strong>Price:</strong> ${product.data.price}</p>
                    <p><strong>Stock:</strong> ${product.data.stock}</p>
                    <div class="actions">
                        <button onclick="editStock(${product.data.id})">Edit Stock</button>
                        <button onclick="deleteProduct(${product.data.id})">Delete Product</button>
                    </div>
                </div>
            `;
        } else {
            alert('Product not found!');
            window.location.href = 'allproducts.html';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching product details.');
    }
});

function editStock(productId) {
    const newStock = prompt('Enter new stock value:');
    if (newStock !== null) {
        fetch('editstock.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: productId, stock: newStock }),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    alert('Stock updated successfully!');
                    location.reload();
                } else {
                    alert('Failed to update stock: ' + result.message);
                }
            })
            .catch((error) => console.error('Error:', error));
    }
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        fetch('deleteproduct.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: productId }),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    alert('Product deleted successfully!');
                    window.location.href = 'allproducts.html';
                } else {
                    alert('Failed to delete product: ' + result.message);
                }
            })
            .catch((error) => console.error('Error:', error));
    }
}
