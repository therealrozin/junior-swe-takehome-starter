# Backend API Starter (JavaScript)

A minimal Node.js + Express + JavaScript starter for the Junior SWE Take-Home Test.

> **Task Checklist:** See the main [README.md](../../README.md) for a detailed checklist of all tasks with sub-items you can use to track your progress.

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
- JSDoc type hints (Product type definition)
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
Returns a paginated list of products with optional filtering

**Query parameters:**
- `query` (optional): Filter by product name (case-insensitive substring match)
- `inStock` (optional): Filter by stock status (`true` or `false`)
- `page` (optional): Page number, defaults to 1
- `limit` (optional): Items per page, defaults to 10, maximum 100

**Example requests:**
```bash
# Get first page of products
curl http://localhost:3000/api/products

# Get second page
curl "http://localhost:3000/api/products?page=2"

# Filter by name
curl "http://localhost:3000/api/products?query=shirt"

# Filter by inStock
curl "http://localhost:3000/api/products?inStock=true"

# Combine filters with pagination
curl "http://localhost:3000/api/products?query=shirt&inStock=true&page=1&limit=5"
```

**Response:**
```json
{
  "products": [
    {
      "id": 1,
      "name": "Blue T-Shirt",
      "price": 19.99,
      "inStock": true,
      "saved": false
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 15,
    "totalPages": 2,
    "hasMore": true
  }
}
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
├── index.js              # Express server setup
├── data/
│   └── store.js          # In-memory data storage
├── routes/
│   └── products.js       # API route handlers
└── example.test.js       # Example test file
```

## Key Implementation Notes

- The GET endpoint is fully implemented as a reference for the others
- Each endpoint has a comment block explaining what needs to be done
- Use JSDoc comments for type hints if desired
- Use the `products` array in `src/data/store.js` to store data
- Use `getNextId()` to generate unique product IDs
- Return appropriate HTTP status codes (200, 201, 400, 404, etc.)

## Tips

- Start by reading the complete GET endpoint - it shows the pattern
- Look at the test example for how to structure tests
- Each TODO comment in `products.js` shows exactly what to implement
- Run tests frequently to catch issues early
- If you get stuck, refer to the test requirements in the main take-home test document
