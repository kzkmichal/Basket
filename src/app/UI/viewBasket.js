// @ts-nocheck
export class ViewBasket {
  constructor(item) {
    this.item = item
  }


  init() {
    this.createItem()
    this.renderValue()
  }

  createItem() {
    const cartRow = document.createElement('div');
    this.cartRow = cartRow;
    this.cartRow.classList.add('cart-row')
    const cartItems = document.querySelector('.cart-items')
    this.cartItems = cartItems;
    this.cartRow.innerHTML = this.renderHTML();
    this.cartItems.appendChild(this.cartRow);

  }


  renderHTML() {
    const {
      title,
      price,
      image
    } = this.item;

    const content = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${image}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>
`
    return content;

  }

  renderValue() {
    const itemsPrice = this.cartItems.querySelectorAll('.cart-row');
    itemsPrice.forEach(item => {
      const quantity = item.querySelector('.cart-quantity-input')
      this.productQuantity = quantity;
      this.productQuantity.addEventListener('change', (e) => {
        let input = e.target
        if (input.value <= 0) {
          input.value = 1
        } else {

        }
      })
    })

  }
}