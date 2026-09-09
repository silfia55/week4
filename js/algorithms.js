// js/algorithms.js

// ==========================================
// BAGIAN 1: JAVASCRIPT FUNDAMENTALS DARI SUDUT PANDANG PROBLEM SOLVING
// ==========================================

// Latihan 1.1: Menghitung Harga Setelah Diskon
export function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

 //Latihan 1.2: Menghitung Harga Akhir pada Array of Objects Keranjang Belanja
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

// ==========================================
// BAGIAN 2: DATA REPRESENTATION DAN ARRAY OF OBJECTS
// ==========================================

export const initialProducts = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

export function findProductById(products, id) {
  return products.find(product => product.id === id);
}

export function getLowStockProducts(products) {
  return products.filter(product => product.stock < 10);
}

export function updateStock(products, id, newStock) {
  return products.map(product =>
    product.id === id ? { ...product, stock: newStock } : product
  );
}