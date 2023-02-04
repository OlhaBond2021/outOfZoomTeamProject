let productIds = [];
let products = [];

(async function () {
    function createCard(product) {
        // const input = document.createElement('input');
        // input.classList.add('base__button');
        // input.classList.add('button__add-to-cart');
        // input.type = 'button';
        // input.value = 'Add to Cart'
        // input.onclick = function() {
        //     console.log(234);
        // }

        const div = document.createElement('div');
        div.classList.add('sale__card');
        div.innerHTML = `
                    <a href="trainers.html">
                        <img class="sale__card-img" src="${product.imgUrl}" alt="${product.name}">
                    </a>
                    <a href="trainers.html" class="sale__card-link">${product.name}</a>
                    <span class="sale__card-price"><span>$</span>${parseFloat(product.price).toFixed(2)}</span>
                    <input class="base__button button__add-to-cart" onclick="addToCart(${product.id})" type="submit" value="Add to Cart">
            `;
        return div;
    }

    function renderProducts(products) {
        const productsContainer = document.querySelector('.sale__cards');
        for (const product of products) {
            productsContainer.appendChild(createCard(product));
        }
    }

    const response = await fetch ('sale-products.json');
    products = await response.json();

    renderProducts(products);
})();