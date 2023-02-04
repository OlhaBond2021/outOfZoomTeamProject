function addToCart(productId) {
    if (!productIds.includes(productId)) {
        productIds.push(productId)
    }

    console.log(products.find(i => i.id == productId));

    const basket = `<div class="basket-show basket__wrapper">
                            <div class="basket__svg-bg">
                                <div class="basket__circle-with-number">
                                    <span class="basket__quantity-of-goods">${productIds.length}</span>
                                </div>
                            </div>
                        </div>`;
<<<<<<< HEAD
    //function renderBasketAfterClick() {
        console.log('click');
        const basketShow = document.querySelector('.basket__container');
        basketShow.innerHTML += basket;
    //}

    // document.addEventListener('click', function(e) {
    //     if (e.target.classList.contains('button__add-to-cart')) {
    //         renderBasketAfterClick();
    //     }
    // })

}



// (function() {
//
//     const basket = `<div class="basket-show basket__wrapper">
//                             <div class="basket__svg-bg">
//                                 <div class="basket__circle-with-number">
//                                     <span class="basket__quantity-of-goods">1</span>
//                                 </div>
//                             </div>
//                         </div>`;
//
//     function renderBasketAfterClick() {
//         console.log(123);
//         const basketShow = document.querySelector('.basket__container');
//        basketShow.innerHTML += basket;
//     }
//
//     document.addEventListener('click', function(e) {
//        if (e.target.classList.contains('button__add-to-cart')) {
//          renderBasketAfterClick();
//        }
//     })


        // const btnAddGoodsInBasket = document.querySelectorAll('.base__button');
        //
        // console.log('btnAddGoodsInBasket => ', btnAddGoodsInBasket);
        //
        //
        // btnAddGoodsInBasket.forEach((btnAddGoods) => {
        //     btnAddGoods.addEventListener("click", renderBasketAfterClick);
        // })


//
// })();

=======

        // console.log('click');
        const basketShow = document.querySelector('.basket__container');
        basketShow.innerHTML += basket;
}
>>>>>>> f573cf5971e0f030f1281539105a5924dd61a590
