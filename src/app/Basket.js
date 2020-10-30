// // @ts-nocheck
// export class Basket {
//   constructor(item) {
//     this.item = item
//   }

//   addItem() {
//     const cartRow = document.createElement('div');
//     this.cartRow = cartRow;
//     cartRow.classList.add('cart-row')
//     const cartItems = document.querySelector('.cart-items')
//     this.cartItems = cartItems
//     const cartItemsNames = [...document.querySelectorAll(".cart-item-title")].map(name => name.innerText)
//     if (cartItemsNames.includes(this.item.title)) {
//       return
//     } else {
//       cartRow.innerHTML = this.renderHTML()
//       cartItems.appendChild(cartRow)
//     }
//     this.updateTotal()
//     this.checkValue()
//     this.removeItem()


//   }
//   renderHTML() {
//     const {
//       title,
//       price,
//       image
//     } = this.item;
//     const content = `
//       <div class="cart-item cart-column">
//           <img class="cart-item-image" src="${image}" width="100" height="100">
//           <span class="cart-item-title">${title}</span>
//       </div>
//       <span class="cart-price cart-column">${price}</span>
//       <div class="cart-quantity cart-column">
//           <input class="cart-quantity-input" type="number" value="1">
//           <button class="btn btn-danger" type="button">REMOVE</button>
//       </div>
// `
//     return content;
//   }

//   updateTotal() {
//     let total = 0
//     const itemsPrice = this.cartItems.querySelectorAll('.cart-row');
//     itemsPrice.forEach(item => {
//       const priceElement = item.querySelector('.cart-price').innerText;
//       const price = parseFloat(priceElement.replace(`$`, ''));
//       const quantityElement = item.querySelector('.cart-quantity-input')
//       this.productQuantity = quantityElement;
//       total = total + (price * this.productQuantity.value);
//     })
//     this.totalPrice = document.querySelector('.cart-total-price')
//     this.totalPrice.innerText = `$${total.toFixed(2)}`;
//   }


//   checkValue() {
//     this.productQuantity.addEventListener('change', (e) => {
//       let input = e.target
//       if (input.value <= 0) {
//         input.value = 1
//       } else {
//         this.updateTotal()
//       }
//     })
//   }

//   removeItem() {
//     const removeButtom = this.cartRow.querySelector('.btn-danger')
//     removeButtom.addEventListener('click', (e) => {
//       const button = e.target
//       const row = button.parentNode.parentNode
//       row.remove()
//       this.updateTotal()
//     })
//   }

//   purchase() {
//     const purchaseButton = document.querySelector('.btn-purchase')
//     purchaseButton.addEventListener('click', () => {
//         this.cartItems.innerHTML = "";
//         this.updateTotal()
//       }

//     )
//   }
// }