
import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import basketImage from '../images/basket-click.png';
import starImage from '../images/star-click.png';

const Header = ({ cartCount, favoriteCount }) => {
  return (
    <div className="header">
      <div className="cart">
        <img src={basketImage} alt="Cart" />
        <span>{cartCount}</span>
      </div>
      <div className="favorites">
        <img src={starImage} alt="Favorites" />
        <span>{favoriteCount}</span>
      </div>
    </div>
  );
};

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
  favoriteCount: PropTypes.number.isRequired,
};

export default Header;
