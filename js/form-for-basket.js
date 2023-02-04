(async function () {
    const buttonAddToCart = document.querySelector('.button__add-to-cart');

    function renderProductInBasket(product) {
        const div = document.createElement("div");
        div.classList.add("products-list__item");
        div.innerHTML = `
                 <img class="products-list__img" src="${product.imgUrl}" alt="${product.name}">
                 <div class="products-list__description">
                      <h6 class="product-list__name-product">${product.name}</h6>
                      <div class="products-list__input-amount">
                          <div class="products-list__input-wrapper">
                                <input class="products-list__input" name="number" type="number">
                          </div>
                          <p class="products-list__amount"><span>$</span>${parseFloat(product.price).toFixed(2)}</p>
                      </div>
                 </div>
                 <img class="products-list__mini-basket" src="img/form-for-basket/form-for-basket__mini-basket.svg"
                     alt="mini-basket">
        `;
        return div;
    }

    function renderProducts() {
        const productsContainer = document.querySelector('.products-list__item-container');
        for (let i = 0; i < productsContainer.length; i++) {
            productsContainer.appendChild(createCard(productsContainer[i]));
        }
    }

    const response = await fetch("sale-products.json");
    const products = await response.json();

    console.log(products[0]);

    renderProducts(products);


})();































