document.getElementById('add-product-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('addproduct.php', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        if (result.success) {
            alert('Product added successfully!');
            window.location.href = 'viewdetails.html?id=' + result.product_id; // Redirect ke detail produk
        } else {
            alert('Failed to add product: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the product.');
    }
});
