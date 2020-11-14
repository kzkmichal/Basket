class Basket {
  constructor() {
    this._data = []
  }
  add(item) {
    this._data.push(item);
  }
  remove(item) {
    const data = this._data.filter(product =>
      item.id !== product.id
    );
    this._data.splice(0, this._data.length, ...data)

  }
  removeAll() {
    this._data.length = 0
  }
  getItems() {
    return this._data;
  }
  getSum() {
    let arr = []
    this._data.map(item => {
      const price = item.price * item.amount
      arr.push(price)
      // price.reduce((cur, prev) => cur + prev, 0)
    })
    const reducer = (prev, cur) => prev + cur
    const sum = arr.reduce(reducer, 0);
    return sum
  }
  getQuantity(id, value) {
    const item = this._data.find(item => item.id === id);
    item.amount = value


  }
}

const instance = new Basket();
Object.freeze(instance);
export default instance;