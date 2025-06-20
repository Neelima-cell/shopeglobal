import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import './ProductItem.css';

// ProductItem component representing a single product with Add to Cart functionality
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking add to cart
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    }));
  };

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price}</p>
          <div className="product-rating">
            <span className="rating">⭐ {product.rating}</span>
            <span className="stock">In Stock: {product.stock}</span>
          </div>
          {product.discountPercentage > 0 && (
            <span className="discount">-{product.discountPercentage}%</span>
          )}
        </div>
      </Link>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem; 