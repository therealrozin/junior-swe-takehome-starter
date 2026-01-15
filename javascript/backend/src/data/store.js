/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {number} price
 * @property {boolean} inStock
 * @property {boolean} saved
 */

// In-memory store of products
export let products = [
  {
    id: 1,
    name: 'Blue T-Shirt',
    price: 19.99,
    inStock: true,
    saved: false,
  },
  {
    id: 2,
    name: 'Red Sneakers',
    price: 59.99,
    inStock: true,
    saved: true,
  },
  {
    id: 3,
    name: 'Black Jeans',
    price: 39.99,
    inStock: false,
    saved: false,
  },
  {
    id: 4,
    name: 'White Shirt',
    price: 24.99,
    inStock: true,
    saved: false,
  },
  {
    id: 5,
    name: 'Green Jacket',
    price: 89.99,
    inStock: false,
    saved: true,
  },
];

/**
 * Get the next available ID for a product
 * @returns {number} The next ID to use
 */
export function getNextId() {
  return Math.max(...products.map((p) => p.id), 0) + 1;
}
