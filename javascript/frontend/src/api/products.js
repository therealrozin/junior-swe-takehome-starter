const API_BASE = 'http://localhost:3000/api';

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {number} price
 * @property {boolean} inStock
 * @property {boolean} saved
 */

/**
 * @typedef {Object} Pagination
 * @property {number} page
 * @property {number} limit
 * @property {number} total
 * @property {number} totalPages
 * @property {boolean} hasMore
 */

/**
 * @typedef {Object} PaginatedResponse
 * @property {Product[]} products
 * @property {Pagination} pagination
 */

/**
 * Fetch products from the API with optional filtering and pagination
 *
 * @param {string} [query] - Optional substring to filter by product name
 * @param {boolean} [inStock] - Optional boolean to filter by stock status
 * @param {number} [page] - Optional page number (defaults to 1)
 * @returns {Promise<PaginatedResponse>} Promise resolving to paginated response
 */
export async function fetchProducts(query, inStock, page) {
  const params = new URLSearchParams();

  if (query) {
    params.append('query', query);
  }

  if (inStock !== undefined) {
    params.append('inStock', String(inStock));
  }

  if (page !== undefined) {
    params.append('page', String(page));
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
 * @param {string} name - Product name (required, cannot be empty/whitespace)
 * @param {number} price - Product price (required, must be positive)
 * @param {boolean} inStock - Whether the product is in stock
 * @returns {Promise<Object>} Promise resolving to the created product
 */
export async function createProduct(name, price, inStock) {
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
 * @param {number} productId - The product ID to toggle
 * @returns {Promise<Object>} Promise resolving to the updated product
 */
export async function toggleSaved(productId) {
  // TODO: Implement toggleSaved
  // Make a PATCH request to /api/products/:id/saved
  // Return the updated product
  // Handle errors (product not found, etc.)
  throw new Error('Not implemented yet');
}

/**
 * Delete a product
 *
 * @param {number} productId - The product ID to delete
 * @returns {Promise<void>} Promise resolving when deletion is complete
 */
export async function deleteProduct(productId) {
  // TODO: Implement deleteProduct
  // Make a DELETE request to /api/products/:id
  // Handle errors (product not found, etc.)
  throw new Error('Not implemented yet');
}
