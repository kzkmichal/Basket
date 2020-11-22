// @ts-nocheck
export class ButtonsView {

  clickEvent(callback) {
    const buttons = document.querySelectorAll('.shop-item-button');
    buttons.forEach(button => button.addEventListener('click', (e) => {
      this.renderBasketButton(e.target)
      callback(button.dataset.id);
    }))

  }

  renderItemButtons = (id) => {
    const buttons = [...document.querySelectorAll('.shop-item-button')];
    const button = buttons.find(item => item.dataset.id === id);
    this.renderBasketButton(button)
  }

  renderBasketButton(button) {
    if (button.disabled) {
      button.innerHTML = 'ADD TO CARD';
      button.disabled = false;
    } else {
      button.innerHTML = 'IN CARD';
      button.disabled = true;
    }
  }

  removeEvent(callback) {
    const purchaseButton = document.querySelector('.btn-purchase')
    purchaseButton.addEventListener('click', () => {
      const buttons = document.querySelectorAll('.remove-cart-item');
      buttons.forEach(button => this.renderItemButtons(button.dataset.id))
      callback()
    })

  }

}