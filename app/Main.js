import {
  ShopItem
} from './Item.js';
import {
  Basket
} from './Basket.js'

class Main {
  constructor() {
    this.buttons = document.querySelectorAll('.shop-item-button');
  }

  run() {
    this.buttons.forEach(button => button.addEventListener('click', this.createItem))
    const totalPrice = document.querySelector('.cart-total-price')
    totalPrice.innerText = `$0`
  };

  createItem(event) {
    const button = event.target
    const item = button.parentElement.parentElement
    this.item = new ShopItem(item)
    this.basket = new Basket(this.item.render())
    this.basket.addItem();
    this.basket.purchase()
  };

}
const main = new Main()

main.run()