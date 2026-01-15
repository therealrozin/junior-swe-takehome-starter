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
  {
    id: 6,
    name: 'Brown Boots',
    price: 79.99,
    inStock: true,
    saved: false,
  },
  {
    id: 7,
    name: 'Gray Hoodie',
    price: 44.99,
    inStock: true,
    saved: false,
  },
  {
    id: 8,
    name: 'Navy Shorts',
    price: 29.99,
    inStock: false,
    saved: false,
  },
  {
    id: 9,
    name: 'Yellow Raincoat',
    price: 54.99,
    inStock: true,
    saved: false,
  },
  {
    id: 10,
    name: 'Purple Scarf',
    price: 19.99,
    inStock: true,
    saved: false,
  },
  {
    id: 11,
    name: 'Orange Cap',
    price: 14.99,
    inStock: false,
    saved: false,
  },
  {
    id: 12,
    name: 'Beige Pants',
    price: 49.99,
    inStock: true,
    saved: false,
  },
  {
    id: 13,
    name: 'Teal Dress',
    price: 64.99,
    inStock: true,
    saved: false,
  },
  {
    id: 14,
    name: 'Maroon Sweater',
    price: 39.99,
    inStock: false,
    saved: false,
  },
  {
    id: 15,
    name: 'Silver Watch',
    price: 99.99,
    inStock: true,
    saved: false,
  },
];

/**
 * Get the next available ID for a product
 * @returns {number} The next ID to use
 */
export function getNextId() {
  return Math.max(...products.map((p) => p.id), 0) + 1;
}
