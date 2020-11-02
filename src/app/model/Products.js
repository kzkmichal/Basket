// @ts-nocheck
export class Products {

  getProducts(products) {
    const productList = products.map(product => product)
    this.productList = productList;
    return productList
  }
  getProduct(id) {
    const product = this.productList.find(prod => prod.id === id);
    return product
  }
}