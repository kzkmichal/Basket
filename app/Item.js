export class ShopItem {
  constructor(item) {
    this.item = item;
    this.price = this.item.querySelector('.shop-item-price').innerText;
    this.title = this.item.querySelector('.shop-item-title').innerText;
    this.image = this.item.querySelector('.shop-item-image').src

  }
  show() {
    console.log(this.title, this.price, this.image)
  }

  render() {
    return {
      title: this.title,
      price: this.price,
      image: this.image
    }

  }


}