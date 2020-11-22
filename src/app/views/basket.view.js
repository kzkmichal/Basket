// @ts-nocheck
export const renderItems = (items) => {
  const cart = document.querySelector('.cart-items');
  cart.innerHTML = ''

  items.forEach(item => {
    const {
      title,
      image,
      price,
      id,
      amount
    } = item

    cart.insertAdjacentHTML('beforeend', renderProduct(title, image, price, id, amount))
  });
}

const renderProduct = (title, image, price, id, amount) => {
  const markup = `
  <div class="cart-row">
    <div class="cart-item cart-column">
    <img class="cart-item-image" src="${image}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
    <input data-id="${id}" class="cart-quantity-input" type="number" value="${amount}">
    <button data-id="${id}" class="btn btn-danger remove-cart-item" type="button">REMOVE</button>
    </div>
  </div>
  `

  return markup
}

export const addRemoveEvent = (callback) => {
  const removeButton = document.querySelectorAll('.remove-cart-item')
  removeButton.forEach(btn => btn.addEventListener('click', e => callback(e.target.dataset.id)))
}
export const addChangeQuantityEvent = (callback) => {
  const inputs = document.querySelectorAll('.cart-quantity-input');
  inputs.forEach(input => input.addEventListener('click', e => {
    const id = e.target.dataset.id;
    let value;
    if (e.target.value >= 1) {
      value = e.target.value;
    } else {
      value = 1;
    }
    callback(id, value)
  }))
}