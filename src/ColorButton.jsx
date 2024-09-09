import React from 'react';

const ColorButton = ({ color, onClick }) => {
  return (
    <button
      className="color-button"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></button>
  );
};

export default ColorButton;
