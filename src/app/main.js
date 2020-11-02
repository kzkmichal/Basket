// @ts-nocheck
// @ts-ignore
import {
  productList
} from './products/productList.js';
import {
  Products
} from './model/Products.js';
import {
  displayProducts
} from './UI/viewProducts.js';
import {
  displayItem,
  remove
} from './UI/viewItem.js'


class Main {
  constructor() {
    this.cart = [];
    this.buttonsDom = []

  }

  init() {
    this.manageProducts()
    this.getButtons()
  };

  manageProducts() {
    this.products = new Products()
    const products = this.products.getProducts(productList)
    displayProducts(products)
  }

  getButtons() {
    this.buttons = [...document.querySelectorAll('.shop-item-button')];
    if (this.buttons) {
      this.buttons.forEach(button => button.addEventListener('click', (e) => {
        this.buttonsDom.push(button)
        e.target.innerText = 'IN CARD';
        e.target.style.backgroundColor = `red`;
        e.target.disabled = true;
        let id = button.dataset.id
        this.manageItems(id)
      }))
    }
  }

  manageItems(id) {
    const cartItem = {
      ...this.products.getProduct(id),
      amount: 1
    };
    this.cart.push(cartItem)
    displayItem(cartItem)
    this.cartLogic()
  }

  cartLogic() {
    const cartItems = document.querySelector('.cart-items')
    cartItems.addEventListener('click', e => {
      const target = e.target.closest('.btn');
      const id = target.dataset.id
      const targetElement = target.classList.contains('cart-item')
      console.log(targetElement)
      this.removeItem(id, targetElement)
    })
  }
  removeItem(id, target) {
    this.cart = this.cart.filter(item => item.id !== id)

    remove(target)
  }


}
const main = new Main()

main.init()