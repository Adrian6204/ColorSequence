import React from 'react';
import ColorButton from './ColorButton';

const ColorGrid = ({ colors, buttonColors, handleColorClick }) => {
  return (
    <div className="color-grid">
      {colors.map((color, index) => (
        <ColorButton
          key={index}
          color={buttonColors[index]}
          onClick={() => handleColorClick(index)}
        />
      ))}
    </div>
  );
};

export default ColorGrid;
