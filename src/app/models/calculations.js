 // @ts-nocheck
 export class Calculations {
   constructor(items) {
     this.items = items.items
   }

   static view(total) {
     const totalPrice = document.querySelector('.cart-total-price')
     if (total) {
       totalPrice.innerText = `$${total.toFixed(2)}`
     } else {
       totalPrice.innerText = `$0`
     }
   }
 }