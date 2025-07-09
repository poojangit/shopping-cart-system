import CustomArray from '../dsa/customArray.js';

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
  const filtered = this.#items.filter(item => item.product.id !== productId);
  this.#items.clear(); // remove all existing items
  for (let i = 0; i < filtered.length; i++) {
    this.#items.push(filtered.data[i]);
  }
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
