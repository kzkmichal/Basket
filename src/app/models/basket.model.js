class Basket {
  constructor() {
    this._data = []
  }
  add(item) {
    this._data.push(item);
  }
  remove(item) {
    const indexToRemove = this._data.findIndex(product =>
      product.id === item.id
    );
    this._data.splice(indexToRemove, 1)
  }
  removeAll() {
    this._data.length = 0
  }
  getItems() {
    return this._data;
  }
  getSum() {
    return this._data.reduce((acc, prev) => acc + (prev.price * prev.amount), 0)
  }
  getQuantity(id, value) {
    const item = this._data.find(item => item.id === id);
    item.amount = value


  }
}

const instance = new Basket();
Object.freeze(instance);
export default instance;