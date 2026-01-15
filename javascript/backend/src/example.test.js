import { describe, it, expect, beforeEach } from 'vitest';
import { products } from './data/store.js';

/**
 * Example tests for the Products API
 *
 * This shows one complete test pattern. You should add at least 2 more tests
 * covering validation cases and edge cases for your endpoints.
 */

describe('GET /api/products', () => {
  beforeEach(() => {
    // Reset products to known state before each test
    // In a real app, you might use a database fixture or seed data
    products.length = 0;
    products.push(
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
        name: 'White Shirt',
        price: 24.99,
        inStock: false,
        saved: false,
      }
    );
  });

  it('should filter products by query parameter (happy path)', () => {
    // This is a happy path test - the basic expected behavior
    // You can test the filtering logic directly against the data

    const query = 'shirt';
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    // "shirt" should match both "Blue T-Shirt" and "White Shirt"
    expect(filtered).toHaveLength(2);
    expect(filtered.map((p) => p.name)).toEqual(
      expect.arrayContaining(['Blue T-Shirt', 'White Shirt'])
    );
  });

  // TODO: Add at least 2 more tests
  // - One for validation (e.g., what happens with invalid input)
  // - One for edge cases (e.g., inStock filtering with no results, empty query)
  //
  // Example:
  // it('should return empty array when query matches no products', () => {
  //   const query = 'nonexistent';
  //   // ... your test
  // });
  //
  // it('should filter by inStock parameter', () => {
  //   // Test that inStock=true only returns in-stock items
  //   // ... your test
  // });
});
