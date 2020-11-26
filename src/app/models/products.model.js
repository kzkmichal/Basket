// export const getProducts = async (callback) => {
//   const response = await fetch('http://localhost:3000/products');
//   const myJson = await response.json();
//   callback(myJson)
// };


class Search {
  async getProducts() {
    const response = await fetch('http://localhost:3000/products');
    this.result = await response.json();
  }
}
export const instanceProduct = new Search();
// export default instanceProduct; //?????  