import { useEffect, useState } from 'react';
import { fetchProducts } from './api/products.js';
import { ProductCard } from './components/ProductCard.js';
import { Product } from './types/Product.js';
import './App.css';

export function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);

  // TODO: Add state for search query
  // const [searchQuery, setSearchQuery] = useState('');

  // TODO: Add state for inStock filter
  // const [inStockOnly, setInStockOnly] = useState(false);

  // TODO: Add state for current page (for "Load more" functionality)
  // const [page, setPage] = useState(1);

  // Fetch initial products on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();
        setProducts(data.products);
        setHasMore(data.pagination.hasMore);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load products'
        );
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);
  // TODO: Add searchQuery and inStockOnly to dependency array
  // When they change, call fetchProducts with those parameters
  // Remember to reset page to 1 when filters change

  const handleToggleSaved = async (productId: number) => {
    // TODO: Implement handleToggleSaved
    // Call toggleSaved API function
    // Update local state if successful
    // Show error if request fails
    console.log('Save button clicked for product:', productId);
  };

  const handleAddProduct = async (
    name: string,
    price: number,
    inStock: boolean
  ) => {
    // TODO: Implement handleAddProduct
    // Call createProduct API function
    // Add returned product to local state
    // Clear form if successful
    // Show error if request fails
    console.log('Add product:', { name, price, inStock });
  };

  const handleLoadMore = async () => {
    // TODO: Implement handleLoadMore
    // Increment page state
    // Call fetchProducts with current filters and new page number
    // APPEND new products to existing products (don't replace!)
    // Update hasMore from response
    // Handle loading state and errors
    console.log('Load more clicked');
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

        {/* TODO: Add "Load more" button */}
        {/* Show this button only when hasMore is true */}
        {/* <button onClick={handleLoadMore} disabled={loading}>
          Load more
        </button> */}
      </main>
    </div>
  );
}
