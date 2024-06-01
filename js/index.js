// index.html

let cartCount = 0;

function toggleCart(button) {
    const cartIcon = button.querySelector('img');
    const cartBadge = document.getElementById('cart-badge');

    if (cartIcon && cartBadge) {
        if (cartIcon.src.includes('cart.svg')) {
            cartIcon.src = '/assets/icons/cart-done.svg';
            cartCount++;
        } else {
            cartIcon.src = '/assets/icons/cart.svg';
            cartCount--;
        }

        cartBadge.innerText = cartCount;
        cartBadge.style.display = cartCount > 0 ? 'block' : 'none';
    } else {
        console.error('Cart icon or badge not found');
    }
}