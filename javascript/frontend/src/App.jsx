import { useEffect, useState } from 'react';
import { fetchProducts } from './api/products.js';
import { ProductCard } from './components/ProductCard.jsx';
import './App.css';

export function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO: Add state for search query
  // const [searchQuery, setSearchQuery] = useState('');

  // TODO: Add state for inStock filter
  // const [inStockOnly, setInStockOnly] = useState(false);

  // Fetch initial products on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);
  // TODO: Add searchQuery and inStockOnly to dependency array
  // When they change, call fetchProducts with those parameters

  const handleToggleSaved = async (productId) => {
    // TODO: Implement handleToggleSaved
    // Call toggleSaved API function
    // Update local state if successful
    // Show error if request fails
    console.log('Save button clicked for product:', productId);
  };

  const handleAddProduct = async (name, price, inStock) => {
    // TODO: Implement handleAddProduct
    // Call createProduct API function
    // Add returned product to local state
    // Clear form if successful
    // Show error if request fails
    console.log('Add product:', { name, price, inStock });
  };

  return (
    <div className="app">
      <header>
        <h1>Product Catalog</h1>
      </header>

      <main>
        {/* TODO: Add search input field */}
        {/* <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}

        {/* TODO: Add "In stock only" filter toggle */}
        {/* <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          In stock only
        </label> */}

        {/* TODO: Add form to create new products */}
        {/* <form onSubmit={handleAddProduct}>
          <input type="text" placeholder="Product name" required />
          <input type="number" placeholder="Price" step="0.01" required />
          <label>
            <input type="checkbox" /> In stock
          </label>
          <button type="submit">Add Product</button>
        </form> */}

        {/* Error message display */}
        {error && <div className="error-message">{error}</div>}

        {/* Loading state */}
        {loading && <p>Loading products...</p>}

        {/* Empty state */}
        {!loading && products.length === 0 && !error && (
          <p className="empty-state">No products found</p>
        )}

        {/* Product list */}
        {!loading && products.length > 0 && (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onToggleSaved={handleToggleSaved}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
