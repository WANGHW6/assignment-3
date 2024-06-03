let cartCount = 0;
let cartSubtotal = 0;

function toggleCartVisibility() {
    const cartContainer = document.querySelector('.cart-container');
    if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
        cartContainer.style.display = 'block';
    } else {
        cartContainer.style.display = 'none';
    }
}

function toggleCart(button) {
    const cartIcon = button.querySelector('img');
    const cartBadge = document.getElementById('cart-badge');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCountElement = document.getElementById('cart-count');
    const cartSubtotalElement = document.getElementById('cart-subtotal');

    const article = button.closest('article');
    if (!article) {
        console.error('Article not found');
        return;
    }

    const itemName = article.querySelector('h4').innerText;
    const itemPriceElement = article.querySelector('.price p');
    if (!itemPriceElement) {
        console.error('Price element not found');
        return;
    }

    const itemPrice = parseFloat(itemPriceElement.innerText.replace('$', ''));
    const itemImageSrc = article.querySelector('img').src;

    if (cartIcon && cartBadge) {
        if (cartIcon.src.includes('cart.svg')) {
            cartIcon.src = '/assets/icons/cart-done.svg';
            cartCount++;
            cartSubtotal += itemPrice;

            const cartItemHTML = `
                <div class="cart-item" data-name="${itemName}">
                    <img src="${itemImageSrc}" alt="${itemName}">
                    <div class="item-details">
                        <div class="item-details-upper">
                            <div class="item-details-left">
                                <span class="item-name">${itemName}</span>
                                <span class="item-description">PS5 video game</span>
                            </div>
                            <div class="item-details-right">
                                <img src="/assets/icons/bin.svg" alt="Delete Icon" class="delete-icon" onclick="removeCartItem(this, ${itemPrice})">
                            </div>
                        </div>
                        <div class="item-details-lower">
                            <span class="item-price">$${itemPrice.toFixed(2)}</span>
                            <div class="item-quantity">
                                <button class="quantity-button">-</button>
                                <span class="quantity-value">1</span>
                                <button class="quantity-button">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
        } else {
            cartIcon.src = '/assets/icons/cart.svg';
            cartCount--;
            cartSubtotal -= itemPrice;

            const cartItem = cartItemsContainer.querySelector(`.cart-item[data-name="${itemName}"]`);
            if (cartItem) {
                cartItem.remove();
            }
        }

        cartBadge.innerText = cartCount;
        cartBadge.style.display = cartCount > 0 ? 'block' : 'none';
        cartCountElement.innerText = cartCount;
        cartSubtotalElement.innerText = `$${cartSubtotal.toFixed(2)}`;
    } else {
        console.error('Cart icon or badge not found');
    }
}

function removeCartItem(deleteIcon, itemPrice) {
    const cartItem = deleteIcon.closest('.cart-item');
    cartItem.remove();

    cartCount--;
    cartSubtotal -= itemPrice;

    const cartBadge = document.getElementById('cart-badge');
    const cartCountElement = document.getElementById('cart-count');
    const cartSubtotalElement = document.getElementById('cart-subtotal');

    cartBadge.innerText = cartCount;
    cartBadge.style.display = cartCount > 0 ? 'block' : 'none';
    cartCountElement.innerText = cartCount;
    cartSubtotalElement.innerText = `$${cartSubtotal.toFixed(2)}`;
}