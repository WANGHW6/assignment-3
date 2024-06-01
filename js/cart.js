// product-page.html

function toggleCart() {
  const button = document.querySelector('.add-to-cart button a');
  const cartIcon = document.querySelector('a[href="/html/payment/view-cart.html"] img');

  if (button.innerHTML.includes('Add to Cart')) {
      button.innerHTML = 'Added <img src="/assets/icons/cart-white.svg" alt="Cart">';
      cartIcon.src = "/assets/icons/cart-marked.svg";
  } else {
      button.innerHTML = 'Add to Cart <img src="/assets/icons/cart-white.svg" alt="Cart">';
      cartIcon.src = "/assets/icons/cart.svg";
  }
}