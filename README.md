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
- One fully working API endpoint (GET with filtering)
- One complete React component
- One working API client function
- One example test

🔨 **Stubs with TODOs:**
- POST, PATCH, DELETE endpoints (you implement)
- Additional API functions (you implement)
- UI features: search, filter, add product form (you implement)
- Error handling improvements (you can add)

## Quick Reference

### Backend Tasks
1. Implement POST, PATCH, DELETE endpoints
2. Add validation for POST (name required, price positive)
3. Write 2 more tests (you have 1 example)

See `backend/README.md` for full API specifications.

### Frontend Tasks
1. Add search input that filters by product name
2. Add "In stock only" toggle filter
3. Implement the saved button functionality
4. Create a form to add new products
5. Improve error handling

See `frontend/README.md` for detailed feature descriptions.

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

The test is designed for 2-3 hours. Here's a suggested breakdown:

- **Setup & understanding** (15 min) - read the starters, understand the patterns
- **Backend endpoints** (45-60 min) - implement POST, PATCH, DELETE, and tests
- **Frontend features** (45-60 min) - search, filter, add product form
- **Integration & polish** (30 min) - test together, fix issues, error handling

Don't worry if you go over. Focus on core functionality and clear thinking.

## Questions?

Refer to:
- Backend README: `typescript/backend/README.md` or `javascript/backend/README.md`
- Frontend README: `typescript/frontend/README.md` or `javascript/frontend/README.md`
- The example code in each starter
- The test requirements document provided to you

---

## About This Repository

This starter kit is designed to help candidates focus on implementation and problem-solving rather than project setup. It includes:

- Working examples demonstrating patterns and structure
- Clear TODOs marking what needs to be implemented
- Test infrastructure ready to use
- Development servers pre-configured

Good luck! Focus on core functionality and clear thinking.
