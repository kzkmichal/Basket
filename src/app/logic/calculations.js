// @ts-nocheck
export class Calculations {
  constructor(items) {
    this.items = items.items
  }

  sum() {
    let total = 0
    const prices = this.items.map(item => item.price)
    total = prices.reduce((prev, cur) => {
      return prev + cur
    }, 0)
    this.view(total)
  }

  view(total) {
    console.log(total)
    this.totalPrice = document.querySelector('.cart-total-price')
    this.totalPrice.innerText = `$${total.toFixed(2)}`;
  }
}