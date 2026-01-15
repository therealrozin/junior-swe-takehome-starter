# Junior SWE Take-Home Test Starter

> **Purpose:** This repository provides starter templates for a junior software engineer take-home coding test. It includes working examples and TODO stubs to help candidates focus on implementation rather than setup.

Welcome! This repository contains starter templates for building a full-stack product management feature.

## Choosing Your Language

You can work in **TypeScript** (recommended) or **JavaScript**. Choose whichever you're more comfortable with.

Both versions include the same features and follow the same patterns. The main difference is TypeScript requires type definitions, while JavaScript uses JSDoc comments for optional type hints.

## Getting Started

### Option 1: TypeScript (Recommended)

1. **Backend:**
   ```bash
   cd typescript/backend
   npm install
   npm run dev
   ```
   The API will start on `http://localhost:3000`

2. **Frontend (in a new terminal):**
   ```bash
   cd typescript/frontend
   npm install
   npm run dev
   ```
   The UI will open on `http://localhost:5173`

### Option 2: JavaScript

1. **Backend:**
   ```bash
   cd javascript/backend
   npm install
   npm run dev
   ```
   The API will start on `http://localhost:3000`

2. **Frontend (in a new terminal):**
   ```bash
   cd javascript/frontend
   npm install
   npm run dev
   ```
   The UI will open on `http://localhost:5173`

## What's Included

Each starter provides:

✅ **Complete Examples:**
- One fully working API endpoint (GET with filtering and pagination)
- One complete React component
- One working API client function
- One example test

🔨 **Stubs with TODOs:**
- POST, PATCH, DELETE endpoints (you implement)
- Additional API functions (you implement)
- UI features: search, filter, add product form, load more (you implement)
- Error handling improvements (you can add)

## Task Checklist

Track your progress with this checklist. All tasks are expected unless marked as stretch.

### Backend API

**POST /api/products** - Create new products
- [ ] Accept `name`, `price`, `inStock` in request body
- [ ] Validate: `name` is required and cannot be empty/whitespace
- [ ] Validate: `price` must be a positive number
- [ ] Auto-generate unique numeric `id`
- [ ] Default `saved` to `false`
- [ ] Return `201` with created product on success
- [ ] Return `400` with error message on validation failure

**PATCH /api/products/:id/saved** - Toggle saved status
- [ ] Parse product ID from URL
- [ ] Find product by ID
- [ ] Flip the `saved` boolean
- [ ] Return updated product on success
- [ ] Return `404` if product not found

**DELETE /api/products/:id** - Remove a product
- [ ] Parse product ID from URL
- [ ] Remove product from store
- [ ] Return success message
- [ ] Return `404` if product not found

**Testing** - Add at least 2 tests
- [ ] Test: POST validation rejects invalid input (empty name or negative price)
- [ ] Test: One other meaningful case (toggle saved, delete, edge case, etc.)

See `backend/README.md` for full API specifications.

### Frontend UI

**Search filter**
- [ ] Add text input with local state
- [ ] Pass search query to `fetchProducts()`
- [ ] Include in `useEffect` dependency array

**In-stock filter**
- [ ] Add checkbox with local state
- [ ] Pass `inStock` boolean to `fetchProducts()`
- [ ] Include in `useEffect` dependency array

**Add product form**
- [ ] Form with `name`, `price`, `inStock` fields
- [ ] Submit calls `createProduct()` API function
- [ ] Add returned product to products state
- [ ] Clear form on success
- [ ] Display error on failure

**Saved button**
- [ ] Implement `handleToggleSaved` callback
- [ ] Call `toggleSaved()` API function
- [ ] Update product in local state on success
- [ ] Display error on failure

**Load more**
- [ ] Track current page in state
- [ ] Show "Load more" button when `hasMore` is true
- [ ] Fetch next page and append to existing products
- [ ] Hide button when no more products

**API functions** (in `src/api/products.ts`)
- [ ] `createProduct()` - POST request
- [ ] `toggleSaved()` - PATCH request
- [ ] `deleteProduct()` - DELETE request (for stretch task)

See `frontend/README.md` for detailed feature descriptions.

### Stretch (Optional)
- [ ] Add delete button to ProductCard
- [ ] Add loading indicator during API calls
- [ ] Improve form validation feedback

## Directory Structure

```
├── typescript/
│   ├── backend/          # Node + Express + TypeScript
│   └── frontend/         # React + Vite + TypeScript
├── javascript/
│   ├── backend/          # Node + Express + JavaScript
│   └── frontend/         # React + Vite + JavaScript
└── README.md             # This file
```

## Tips

- **Start with the backend** - it's easier to test from the command line
- **Run both servers** - backend on 3000, frontend on 5173
- **Check the examples** - ProductCard and GET endpoint show the patterns
- **Use the TODOs** - they guide what needs to be implemented
- **Read the READMEs** - each starter has detailed setup and API docs
- **Test as you go** - run tests frequently and check network calls

## Connecting Frontend to Backend

The frontend is configured to call the backend on `http://localhost:3000/api/products`.

If your backend is on a different host/port, update this in `src/api/products.ts` (TypeScript) or `src/api/products.js` (JavaScript):

```javascript
const API_BASE = 'http://localhost:3000/api';
```

## Stuck?

- Check the example code (GET endpoint, ProductCard component)
- Read the test requirements document provided to you (if applicable)
- Use the Stuck Protocol: add comments explaining what you tried and what you'd do next
- Console.log frequently to debug

## Time Management

The test is designed to take around 1.5 hours for core functionality. Taking up to 2-3 hours is perfectly fine if you want to be more thorough or explore edge cases.

Suggested breakdown:
- **Setup & understanding** (10-15 min) - read the template code, understand the patterns
- **Backend endpoints** (30-45 min) - implement POST, PATCH, DELETE, and tests
- **Frontend features** (45-60 min) - search, filter, form, saved button, load more
- **Integration & polish** (15-30 min) - test together, fix issues, error handling

Don't worry if you go over. Focus on core functionality and clear thinking.

## Questions?

Refer to:
- Backend README: `typescript/backend/README.md` or `javascript/backend/README.md`
- Frontend README: `typescript/frontend/README.md` or `javascript/frontend/README.md`
- The example code in each starter
- The test requirements document provided to you

---

## Submission Templates

This repository includes templates to help you structure your submission:

- **`REFLECTION_TEMPLATE.md`** - Copy this file, fill it in, and rename it to `REFLECTION.md` in your submission
- **`AI_USAGE_TEMPLATE.md`** - (Optional but encouraged) Copy this file, fill it in, and rename it to `AI_USAGE.md` in your submission if you used AI tools like ChatGPT or Copilot

Using AI tools is fine and expected. We care that you understand your code and can explain what the tools helped with.

---

## About This Repository

This starter kit is designed to help candidates focus on implementation and problem-solving rather than project setup. It includes:

- Working examples demonstrating patterns and structure
- Clear TODOs marking what needs to be implemented
- Test infrastructure ready to use
- Development servers pre-configured
- Submission templates for reflection and AI usage

Good luck! Focus on core functionality and clear thinking.
