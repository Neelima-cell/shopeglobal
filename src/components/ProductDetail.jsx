import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useProduct } from '../hooks/useProducts';
import { addToCart } from '../store/cartSlice';
import './ProductDetail.css';

// ProductDetail component that shows detailed information about a selected product
const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
      }));
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error Loading Product</h2>
        <p>{error}</p>
        <Link to="/" className="back-link">← Back to Products</Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error-container">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">← Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← Back to Products</Link>
      
      <div className="product-detail-content">
        <div className="product-images">
          <div className="main-image">
            <img src={product.images[0] || product.thumbnail} alt={product.title} />
          </div>
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 1}`}
                className="thumbnail"
              />
            ))}
          </div>
        </div>
        
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-brand">Brand: {product.brand}</p>
          <p className="product-category">Category: {product.category}</p>
          
          <div className="product-pricing">
            <span className="product-price">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="discount-badge">-{product.discountPercentage}%</span>
            )}
          </div>
          
          <div className="product-rating">
            <span className="rating">⭐ {product.rating}/5</span>
          </div>
          
          <div className="product-stock">
            <span className={`stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>
          
          <p className="product-description">{product.description}</p>
          
          <button
            className="add-to-cart-btn large"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 