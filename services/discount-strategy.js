export function flatDiscount(amount){
    return (total) => total-amount
}
export function percentDiscount(percent){
    return (total) => total-(total*percent/100)
}
// HOF to apply any strategy
export function applyDiscount(strategy) {
  return (total) => {
    const final = strategy(total);
    console.log(`Discounted Total: ₹${final}`);
  };
}
