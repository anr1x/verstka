docdocument.addEventListener('DOMContentLoaded', function () {
    const priceFilter = document.createElement('select');
    priceFilter.innerHTML = `
        <option value="all">Все цены</option>
        <option value="1000">$1000 и выше</option>
        <option value="800">$800 и выше</option>
        <option value="600">$600 и выше</option>
    `;

    document.querySelector('nav ul').appendChild(document.createElement('li')).appendChild(priceFilter);

    const productsContainer = document.getElementById('products');

    priceFilter.addEventListener('change', function () {
        filterProductsByPrice(priceFilter.value);
    });

    function filterProductsByPrice(price) {
        const products = productsContainer.getElementsByClassName('product');

        for (let i = 0; i < products.length; i++) {
            const productPrice = parseInt(products[i].querySelector('p:last-of-type').textContent.replace(/\D/g, ''));
            if (price === 'all' || productPrice >= parseInt(price)) {
                products[i].style.display = 'block';
            } else {
                products[i].style.display = 'none';
            }
        }
    }
});
