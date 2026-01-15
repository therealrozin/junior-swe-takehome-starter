# Frontend Starter (JavaScript + React + Vite)

A minimal React + JavaScript + Vite starter for the CSC Junior SWE Take-Home Test.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the dev server:**
   ```bash
   npm run dev
   ```
   The app will open on `http://localhost:5173` with hot reload enabled.

## Building

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## What's Provided

✅ **Complete:**
- React component structure with JSDoc type hints
- ProductCard component showing styling and props patterns
- API client with complete `fetchProducts` function
- App component with data fetching and error handling
- Minimal CSS for layout and styling
- Type hints matching the backend Product model

🔨 **TODO (Implement these):**
- Search input that filters by product name
- "In stock only" filter toggle
- Add product form (name, price, inStock fields)
- Wire up saved button to call API and update state
- Error handling UI improvements
- Implement remaining API functions (createProduct, toggleSaved, deleteProduct)

## Connecting to the Backend

Make sure the **backend is running on `http://localhost:3000`** before starting the frontend.

The API client in `src/api/products.js` connects to:
```
http://localhost:3000/api/products
```

If the backend is on a different URL, update the `API_BASE` constant in `src/api/products.js`.

## Project Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx               # Main app component with TODO comments
├── App.css               # Styling
├── components/
│   └── ProductCard.jsx   # Complete component example
└── api/
    └── products.js       # API client functions
```

## Key Implementation Notes

- The ProductCard component is fully implemented as a reference
- The App component has TODO comments showing where to add features
- Each API function has JSDoc comments explaining what to implement
- Use React hooks (useState, useEffect) for state management
- Keep component logic clean and simple - no complex patterns needed for this test

## Features to Implement

### 1. Search Filter
- Add a text input that updates state
- Pass the search query to `fetchProducts()` in the useEffect dependency array
- The API will filter results by product name

### 2. In-Stock Filter
- Add a checkbox that toggles the filter
- Pass the inStock boolean to `fetchProducts()`
- The API will only return in-stock products when enabled

### 3. Add Product Form
- Create a form with fields for name, price, and inStock
- Call `createProduct()` from the API
- Add the returned product to the products list
- Clear the form on successful submission

### 4. Implement API Functions
- `createProduct()` - POST to create new products
- `toggleSaved()` - PATCH to toggle saved status
- `deleteProduct()` - DELETE to remove products

## Tips

- Start by looking at the complete ProductCard component
- Read through the API client to see the pattern
- Use the error message display to debug API issues
- Check the browser console for helpful error messages
- Test frequently - the hot reload is your friend
- If something isn't working, check that the backend is running

## Common Issues

**"Failed to fetch products" error:**
- Is the backend running on http://localhost:3000?
- Check the browser console for CORS or network errors

**Components not showing:**
- Check that you're passing the right props
- Look at ProductCard for the pattern

**Search/filter not working:**
- Make sure you've added the state variables
- Check that you're including them in the useEffect dependency array
- Look at the network tab in DevTools to see what URL is being called
