// @ts-nocheck
// @ts-ignore
//model
import
instanceBasket
from "../models/basket.model.js"
// views
import {
  ButtonsView
} from '../views/button.views.js'
import {
  renderProducts,
} from '../views/product-list.view.js';
import {
  renderItems,
  addRemoveEvent,
  addChangeQuantityEvent
} from '../views/basket.view.js'
// products
import {
  products
} from '../data-base/products-db.js'
import {
  Calculations
} from '../models/calculations.js'

class Main {
  init() {
    this.cart = document.querySelector('.cart-items');
    renderProducts(products)
    const addToBasketHandler = (id) => this.createItem(id)
    const removeItemHandler = () => {
      this.cart.innerHTML = "";
      instanceBasket.removeAll();
      Calculations.view(instanceBasket.getSum());
    }
    this.buttonsView = new ButtonsView();
    this.buttonsView.clickEvent(addToBasketHandler);
    this.buttonsView.removeEvent(removeItemHandler)
    Calculations.view();
  };

  manageItemQuantity(id, value) {
    instanceBasket.getQuantity(id, value);
    this.showItems()
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
    this.buttonsView.renderItemButtons(id)
    this.showItems()
    Calculations.view(instanceBasket.getSum());
  }

  showItems() {
    const items = instanceBasket.getItems()
    renderItems(items)
    instanceBasket.getSum()
    Calculations.view(instanceBasket.getSum());
    const removeBasketItemHandler = (id) => {
      this.removeItem(id)
    }
    const changeItemQuantityHandler = (id, value) => {
      this.manageItemQuantity(id, value)
    }
    addRemoveEvent(removeBasketItemHandler)
    addChangeQuantityEvent(changeItemQuantityHandler)
  }

  removeAllItems() {
    this.buttonsView.removeEvent();
    instanceBasket.removeAll();
    Calculations.view(instanceBasket.getSum());
  }
}

const main = new Main()
main.init()