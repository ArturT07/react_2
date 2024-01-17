import React from 'react';
import '../Button.scss';

const Button = ({ backgroundColor, text, onClick }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <button className="custom-button" style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
