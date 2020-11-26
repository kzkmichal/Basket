// @ts-nocheck
export const renderProducts = (products) => {
  products.forEach(product => {
    const {
      title,
      image,
      price,
      id
    } = product

    const items = document.querySelector('.shop-items')
    items.insertAdjacentHTML('beforeend', renderProduct(title, image, price, id))
  });
}


const renderProduct = (title, image, price, id) => {
  const markup = `
  <div class="shop-item">
    <span class="shop-item-title">${title}</span>
    <img class="shop-item-image" src="${image}">
    <div class="shop-item-details">
    <span class="shop-item-price">$${price}</span>
    <button data-id="${id}" class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
  </div>
  `

  return markup
}


export const renderButtons = (id) => {
  const buttons = [...document.querySelectorAll('.shop-item-button')];
  const button = buttons.find(item => item.dataset.id === id);
  renderButton(button)
}