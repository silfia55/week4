function calculateDiscountedPrice(price, discountPercent) {
 return price - (price * discountPercent) / 100;
}

export function applyDiscounts(cart) {
  const result = [];
  for (const item of cart) {
    const finalPrice = calculateDiscountedPrice(item.price, item.discountPercent);
    result.push({
      ...item,
      finalPrice: finalPrice
    });
  }
  return result;
}