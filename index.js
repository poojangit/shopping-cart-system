import Cart from './models/cart.js'
import Product from './models/product.js'
import showUserCart from './utils/user-utils.js'
import {flatDiscount, applyDiscount} from './services/discount-strategy.js'
import { askQuestion } from './utils/promt.js'


const cart = new Cart()
let productIdCounter = 1
const productsList =[]

async function mainMenu() {
    while(true){
        console.log(`
            Shopping Cart : 
            1. Add Product
            2. view Cart
            3. Update Quantity
            4. Remove Product
            5. Checkout
            6. Exit
            `);
        const choice = await askQuestion("Enter your choice: ");
        switch(choice.trim()){
            case '1':
                const name = await askQuestion("Enter product name : ")
                const price = parseFloat(await askQuestion("Enter product price : "));
                const qty = parseInt(await askQuestion("Enter quantity : "));
                const product = new Product(productIdCounter++, name, price);
                productsList.push(product);
                cart.addProduct(product, qty);
                console.log("Product added to cart");
                break;
            case '2':
                console.table(cart.listItems())
                break;
            case '3':
                const pid = parseInt(await askQuestion("Enter product ID to update quantity: "));
                const newQty = parseInt(await askQuestion("Enter new quantity: "));
                cart.updateQuantity(pid, newQty);
                console.log("Quantity updated");
                break;
            case '4':
                const removeId = parseInt(await askQuestion("Enter product ID to remove: "));
                cart.removeProduct(removeId);
                console.log("Product removed from cart");
                break;
            case '5':
                const username = await askQuestion("Enter your username: ");
                cart.checkout(applyDiscount(flatDiscount(100)));

                const user = {
                    username,
                    total: cart.calculateTotal()
                }
                showUserCart.call(user, "Hello");
                closePrompt();
                return; // Exit after checkout
            case '6':
                console.log("Exiting...");
                closePrompt();
                return;
            default:
                console.log("Invalid choice, please try again.");
            }
    }   
}
mainMenu()

