import { Router } from 'express';
import { products, getNextId } from '../data/store.js';

const router = Router();

/**
 * GET /api/products
 * Returns a list of products with optional filtering
 *
 * Query parameters:
 * - query: string (optional) - Filter by name substring, case-insensitive
 * - inStock: boolean (optional) - Filter by inStock status
 *
 * Results are sorted by id ascending
 */
router.get('/', (req, res) => {
  const { query, inStock } = req.query;

  let filtered = [...products]; // Create a copy to avoid modifying original

  // Filter by name query (case-insensitive substring match)
  if (query && typeof query === 'string' && query.trim()) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Filter by inStock
  if (inStock !== undefined) {
    const inStockBool = inStock === 'true';
    filtered = filtered.filter((p) => p.inStock === inStockBool);
  }

  // Sort by id ascending
  filtered.sort((a, b) => a.id - b.id);

  res.json(filtered);
});

/**
 * POST /api/products
 * Creates a new product
 *
 * Request body:
 * - name: string (required, cannot be empty/whitespace)
 * - price: number (required, must be positive)
 * - inStock: boolean (required)
 *
 * Defaults:
 * - id: auto-generated
 * - saved: false
 */
router.post('/', (req, res) => {
  // TODO: Implement POST logic
  // Check that name is provided and not just whitespace
  // Check that price is a positive number
  // Create new product with auto-generated id and saved=false
  // Add to products array
  // Return the created product or error response
  res.status(501).json({ error: 'Not implemented yet' });
});

/**
 * PATCH /api/products/:id/saved
 * Toggles the 'saved' field for a product
 *
 * Response:
 * - If product exists: return updated product with flipped saved value
 * - If product does not exist: return error response
 */
router.patch('/:id/saved', (req, res) => {
  // TODO: Implement PATCH logic
  // Parse id from params
  // Find product with that id
  // If found: flip saved, return updated product
  // If not found: return error response
  res.status(501).json({ error: 'Not implemented yet' });
});

/**
 * DELETE /api/products/:id
 * Deletes a product
 *
 * Response:
 * - If product exists: delete it, return success response
 * - If product does not exist: return error response
 */
router.delete('/:id', (req, res) => {
  // TODO: Implement DELETE logic
  // Parse id from params
  // Find product with that id
  // If found: remove from array, return success message
  // If not found: return error response
  res.status(501).json({ error: 'Not implemented yet' });
});

export default router;
