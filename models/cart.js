import CustomArray from '../dsa/customArray';

class Cart {
  #items = new CustomArray(); // closure + encapsulation

  addProduct(product, quantity = 1) {
    const existing = this.#items.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.#items.push({ product, quantity });
    }
  }

  updateQuantity(productId, quantity) {
    const item = this.#items.find(item => item.product.id === productId);
    if (item) item.quantity = quantity;
  }

  removeProduct(productId) {
    this.#items = this.#items.filter(item => item.product.id !== productId);
  }

  listItems() {
    return this.#items.map(item => ({
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
      total: item.product.price * item.quantity
    })).toArray();
  }

  calculateTotal() {
    return this.#items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  checkout(callback) {
    // Demonstrates event loop with async callback
    const total = this.calculateTotal();
    setTimeout(() => callback(total), 0);
  }
}

export default Cart;
