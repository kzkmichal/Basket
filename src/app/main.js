// @ts-nocheck
import {
  ShopItem
} from './Item.js';
// import {
//   Basket
// } from './Basket.js'

import {
  Basket
} from './logic/basket.js'

// @ts-ignore
import {
  products
} from './products/products.js';
import {
  renderProducts
} from './products/renderProducts.js';
import {
  ViewBasket
} from './render/viewBasket.js'

import {
  Calculations
} from './logic/calculations.js'

class Main {
  constructor() {}

  init() {
    renderProducts(products)
    this.selectProduct()
    this.basket = new Basket([])
    this.calculations = new Calculations(this.basket)
    // this.calculatePrices()
    // this.showItem()

  };

  selectProduct() {
    this.buttons = document.querySelectorAll('.shop-item-button');
    this.buttons.forEach(button => button.addEventListener('click', () => {
      this.createItem(button)
    }))
  }
  createItem(button) {
    const item = button.parentElement.parentElement
    this.item = new ShopItem(item)
    this.basket.addItem(this.item.render())
    this.showItem()
    this.calculatePrices()
  };

  showItem() {
    const itmes = this.basket.render()
    itmes.forEach(item => {
      this.viewBasket = new ViewBasket(item);
      this.viewBasket.init()
    })

  }

  calculatePrices() {
    this.calculations.sum()

  }

}
const main = new Main()

main.init()