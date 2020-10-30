// @ts-nocheck
export class Basket {
  constructor(items) {
    // if (Basket.instance === null) {
    this.items = items;
    //   Basket.instance = this
    // }
    // return Basket.instance
  }

  addItem(item) {
    const itemsIds = this.items.map(item => item.id);
    if (itemsIds.includes(item.id)) {
      return
    } else {
      this.items.push(item)
    }
  }
  render() {
    console.log(this.items)
    return this.items
  }
}