function toggleCart() {
  const button = document.querySelector('.add-to-cart button');
  const cartIcon = document.querySelector('a[href="/html/payment/view-cart.html"] img');

  if (button.classList.contains('added')) {
      button.innerHTML = '<a>Add to Cart <img src="/assets/icons/cart-white.svg" alt="Cart"></a>';
      button.classList.remove('added');
      cartIcon.src = "/assets/icons/cart.svg";
  } else {
      button.innerHTML = '<a>Added</a>';
      button.classList.add('added');
      cartIcon.src = "/assets/icons/cart-marked.svg";
  }
}