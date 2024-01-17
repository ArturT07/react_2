// src/components/ProductCard.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';
import starImage from '../images/star.png';
import starClickImage from '../images/star-click.png';

const ProductCard = ({ product, onAddToCart, onToggleFavorite }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const handleAddToCart = () => {
    if (!addedToCart) {
      onAddToCart(product);
      setAddedToCart(true);
    }
  };

  const handleToggleFavorite = () => {
    if (!addedToFavorites) {
      onToggleFavorite(product);
      setAddedToFavorites(true);
    }
  };

  return (
    <div className="product-card">
      <img width='150px' src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Article: {product.article}</p>
      <p>Color: {product.color}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <img
        src={addedToFavorites ? starClickImage : starImage}
        alt="Toggle Favorite"
        className="favorite-icon"
        onClick={handleToggleFavorite}
      />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default ProductCard;
