// @ts-nocheck

const cartItems = document.querySelector('.cart-items')
export const displayItem = (item) => {
  const cartRow = document.createElement('div');
  cartRow.classList.add('cart-row')
  cartRow.innerHTML = renderHTML(item);
  cartItems.appendChild(cartRow);
}
const renderHTML = (item) => {
  const {
    id,
    title,
    price,
    image,
    amount
  } = item;

  const content = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${image}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="${amount}">
          <button class="btn btn-danger" data-id="${id}" type="button">REMOVE</button>
      </div>
`
  return content;

}


export const remove = (target) => {
  console.log(target)
  // cartItems.removeChild(target);
}