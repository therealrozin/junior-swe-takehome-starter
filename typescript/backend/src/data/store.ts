import { Product } from '../types/Product.js';

// In-memory store of products
export let products: Product[] = [
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

// Helper to get next ID
export function getNextId(): number {
  return Math.max(...products.map((p) => p.id), 0) + 1;
}
