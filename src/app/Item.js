// @ts-nocheck
export class ShopItem {
  constructor(item) {
    this.item = item;
    this.id = this.item.querySelector('button').id;
    this.price = this.item.querySelector('.shop-item-price').innerText;
    this.title = this.item.querySelector('.shop-item-title').innerText;
    this.image = this.item.querySelector('.shop-item-image').src
  }

  render() {
    return {
      id: this.id,
      title: this.title,
      price: parseFloat(this.price.replace(`$`, '')),
      image: this.image
    }

  }


}