function flatDiscount(amount){
    return (total) => total-amount
}
function percentDiscount(percent){
    return (total) => total-(total*percent/100)
}
// HOF to apply any strategy
function applyDiscount(strategy) {
  return (total) => {
    const final = strategy(total);
    console.log(`Discounted Total: ₹${final}`);
  };
}

export default {
  flatDiscount,
  percentDiscount,
  applyDiscount
};
