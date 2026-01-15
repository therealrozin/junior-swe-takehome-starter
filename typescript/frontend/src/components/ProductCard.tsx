import { Product } from '../types/Product.js';

interface ProductCardProps {
  product: Product;
  onToggleSaved: (productId: number) => void;
}

/**
 * ProductCard component
 *
 * Displays a single product with its details and a button to toggle saved status.
 * This is a complete example showing component structure and TypeScript types.
 */
export function ProductCard({ product, onToggleSaved }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-header">
        <h3>{product.name}</h3>
        <button
          className="save-button"
          onClick={() => onToggleSaved(product.id)}
          title={product.saved ? 'Unsave' : 'Save'}
        >
          {product.saved ? '★' : '☆'}
        </button>
      </div>

      <div className="product-details">
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="stock">
          {product.inStock ? (
            <span className="in-stock">In Stock</span>
          ) : (
            <span className="out-of-stock">Out of Stock</span>
          )}
        </p>
      </div>
    </div>
  );
}
