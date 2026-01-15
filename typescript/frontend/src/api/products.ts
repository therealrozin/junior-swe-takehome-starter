import { Product } from '../types/Product.js';

const API_BASE = 'http://localhost:3000/api';

/**
 * Fetch products from the API with optional filtering
 *
 * @param query - Optional substring to filter by product name
 * @param inStock - Optional boolean to filter by stock status
 * @returns Promise resolving to array of products
 */
export async function fetchProducts(
  query?: string,
  inStock?: boolean
): Promise<Product[]> {
  const params = new URLSearchParams();

  if (query) {
    params.append('query', query);
  }

  if (inStock !== undefined) {
    params.append('inStock', String(inStock));
  }

  const url =
    params.toString().length > 0
      ? `${API_BASE}/products?${params.toString()}`
      : `${API_BASE}/products`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}

/**
 * Create a new product
 *
 * @param name - Product name (required, cannot be empty/whitespace)
 * @param price - Product price (required, must be positive)
 * @param inStock - Whether the product is in stock
 * @returns Promise resolving to the created product
 */
export async function createProduct(
  name: string,
  price: number,
  inStock: boolean
): Promise<Product> {
  // TODO: Implement createProduct
  // Make a POST request to /api/products
  // Send name, price, inStock in the request body
  // Return the created product
  // Handle errors (bad request, validation errors, etc.)
  throw new Error('Not implemented yet');
}

/**
 * Toggle the saved status of a product
 *
 * @param productId - The product ID to toggle
 * @returns Promise resolving to the updated product
 */
export async function toggleSaved(productId: number): Promise<Product> {
  // TODO: Implement toggleSaved
  // Make a PATCH request to /api/products/:id/saved
  // Return the updated product
  // Handle errors (product not found, etc.)
  throw new Error('Not implemented yet');
}

/**
 * Delete a product
 *
 * @param productId - The product ID to delete
 * @returns Promise resolving when deletion is complete
 */
export async function deleteProduct(productId: number): Promise<void> {
  // TODO: Implement deleteProduct
  // Make a DELETE request to /api/products/:id
  // Handle errors (product not found, etc.)
  throw new Error('Not implemented yet');
}
