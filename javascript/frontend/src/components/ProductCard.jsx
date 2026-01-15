/**
 * ProductCard component
 *
 * Displays a single product with its details and a button to toggle saved status.
 * This is a complete example showing component structure.
 *
 * @param {Object} props
 * @param {Object} props.product - Product data
 * @param {number} props.product.id
 * @param {string} props.product.name
 * @param {number} props.product.price
 * @param {boolean} props.product.inStock
 * @param {boolean} props.product.saved
 * @param {Function} props.onToggleSaved - Callback when save button is clicked
 */
export function ProductCard({ product, onToggleSaved }) {
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
