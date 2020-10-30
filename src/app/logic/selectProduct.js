// @ts-nocheck
export class SelectProduct {
  constructor() {
    this.buttons = document.querySelectorAll('.shop-item-button');
  }
  init() {
    this.buttons.forEach(button => button.addEventListener('click', () => {
      this.select(button)
    }))
  }

  select(button) {
    const item = button.parentElement.parentElement
    return item
  }

}