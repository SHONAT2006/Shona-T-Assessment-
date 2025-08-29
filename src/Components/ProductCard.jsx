export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="category">{product.category}</p>
      <p className="price">₹{product.price}</p>
    </div>
  );
}
