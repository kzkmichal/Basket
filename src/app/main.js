// @ts-nocheck
// @ts-ignore
import {
  products
} from './products/products.js';
import {
  renderProducts,
  renderButtons,
  renderButton,
} from './products/viewProducts.js';
import {
  renderItems
} from './render/viewBasket.js'

import {
  Calculations
} from './logic/calculations.js'
import
instanceBasket
from "./logic/basket.js"

class Main {
  init() {
    renderProducts(products)
    this.selectProduct()
    this.manageItems()
    Calculations.view();
    this.removeAllItems();

  };
  selectProduct() {
    const buttons = document.querySelectorAll('.shop-item-button');
    buttons.forEach(button => button.addEventListener('click', (e) => {
      this.createItem(button.dataset.id);
      renderButton(e.target)
    }))
  }

  manageItems() {
    const cart = document.querySelector('.cart-items');
    this.cart = cart;
    cart.addEventListener('click', (e) => {
      let target = e.target
      if (!target) return;
      if (
        target.classList.contains('remove-cart-item')) {
        const id = target.dataset.id
        this.removeItem(id)
      }
      if (target.classList.contains('cart-quantity-input')) {
        if (target.value >= 0) {
          const value = target.value;
          const id = target.dataset.id;
          instanceBasket.getQuantity(id, value);
          this.showItems()
        } else {
          target.value = 0
        }
      }
    })
  }
  createItem(id) {
    const item = {
      ...products.find(e => e.id === id),
      amount: 1

    }
    instanceBasket.add(item);
    this.showItems();
  };

  removeItem(id) {
    const item = products.find(e => e.id === id)
    instanceBasket.remove(item);
    this.showItems()
    Calculations.view(instanceBasket.getSum());
    renderButtons(id)
  }

  showItems() {
    const items = instanceBasket.getItems()
    renderItems(items)
    instanceBasket.getSum()
    Calculations.view(instanceBasket.getSum());
  }

  removeAllItems() {
    const purchaseButton = document.querySelector('.btn-purchase')
    purchaseButton.addEventListener('click', () => {
      const buttons = document.querySelectorAll('.remove-cart-item');
      buttons.forEach(button => renderButtons(button.dataset.id))
      this.cart.innerHTML = "";
      instanceBasket.removeAll();
      Calculations.view(instanceBasket.getSum());
    })
  }
}

const main = new Main()
main.init()