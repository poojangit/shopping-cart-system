import Cart from './models/cart.js'
import Product from './models/product.js'
import showUserCart from './utils/user-utils.js'
import {flatDiscount, applyDiscount} from './services/discount-strategy.js'

const book = new Product(1,"Javascript ", 899)
const course = new Product(2, "Nodejs handBook" , 499)

const cart = new Cart()
cart.addProduct(book,2)
cart.addProduct(course,1)
cart.updateQuantity(1,4)

console.log("Cart Items: ");
console.table(cart.listItems())

cart.checkout(applyDiscount(flatDiscount(100)))

const user = {
    username : "Pooja",
    total : cart.calculateTotal()
}
showUserCart.call(user, "Hello")

