# Backend API Starter (TypeScript)

A minimal Node.js + Express + TypeScript starter for the CSC Junior SWE Take-Home Test.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the dev server:**
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:3000` with hot reload enabled.

## Running Tests

```bash
# Run all tests once
npm test

# Watch mode (reruns on file changes)
npm run test:watch
```

## What's Provided

✅ **Complete:**
- Express server setup with CORS
- TypeScript types (Product interface)
- In-memory data store with seed products
- Fully working `GET /api/products` endpoint with filtering and sorting
- One example test showing the test pattern

🔨 **TODO (Implement these):**
- `POST /api/products` - Create new products (with validation)
- `PATCH /api/products/:id/saved` - Toggle saved status
- `DELETE /api/products/:id` - Delete products
- Add 2 more tests (validation case + edge case)

## API Endpoints Reference

### GET /api/products
Returns a list of products with optional filtering

**Query parameters:**
- `query` (optional): Filter by product name (case-insensitive substring match)
- `inStock` (optional): Filter by stock status (`true` or `false`)

**Example requests:**
```bash
# Get all products
curl http://localhost:3000/api/products

# Filter by name
curl "http://localhost:3000/api/products?query=shirt"

# Filter by inStock
curl "http://localhost:3000/api/products?inStock=true"

# Combine filters
curl "http://localhost:3000/api/products?query=shirt&inStock=true"
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Blue T-Shirt",
    "price": 19.99,
    "inStock": true,
    "saved": false
  }
]
```

### POST /api/products
Create a new product

**Request body:**
```json
{
  "name": "New Product",
  "price": 29.99,
  "inStock": true
}
```

**Validation:**
- `name` is required and cannot be empty or whitespace only
- `price` must be a positive number

**Response:**
Returns the created product with auto-generated `id` and `saved: false`.

### PATCH /api/products/:id/saved
Toggle the saved status of a product

**Example:**
```bash
curl -X PATCH http://localhost:3000/api/products/1/saved
```

**Response:**
Returns the updated product with `saved` flipped.

### DELETE /api/products/:id
Delete a product by ID

**Example:**
```bash
curl -X DELETE http://localhost:3000/api/products/1
```

## Project Structure

```
src/
├── index.ts              # Express server setup
├── types/
│   └── Product.ts        # TypeScript types
├── data/
│   └── store.ts          # In-memory data storage
├── routes/
│   └── products.ts       # API route handlers
└── example.test.ts       # Example test file
```

## Key Implementation Notes

- The GET endpoint is fully implemented as a reference for the others
- Each endpoint has a comment block explaining what needs to be done
- Use the `products` array in `src/data/store.ts` to store data
- Use `getNextId()` to generate unique product IDs
- Return appropriate HTTP status codes (200, 201, 400, 404, etc.)

## Type Checking

To check for TypeScript errors:
```bash
npm run type-check
```

## Tips

- Start by reading the complete GET endpoint - it shows the pattern
- Look at the test example for how to structure tests
- Each TODO comment in `products.ts` shows exactly what to implement
- Run tests frequently to catch issues early
- If you get stuck, refer to the test requirements in the main take-home test document
