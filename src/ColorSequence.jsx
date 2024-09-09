import React, { useState, useEffect } from 'react';
import './ColorSequence.css';
import ColorGrid from './ColorGrid';

const colors = ["purple", "red", "yellow", "blue", "green", "orange", "cyan", "lightgreen", "pink"];
const neutralColor = "#008080";

const ColorSequence = () => {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [buttonColors, setButtonColors] = useState(Array(colors.length).fill(neutralColor));

  useEffect(() => {
    generateSequence();
  }, []);

  const generateSequence = () => {
    const newSequence = Array.from({ length: 9 }, () => colors[Math.floor(Math.random() * colors.length)]);
    setSequence(newSequence);
    setUserSequence([]);
    setCurrentStep(0);
    setButtonColors(Array(colors.length).fill(neutralColor));
  };

  const handleColorClick = (index) => {
    const selectedColor = colors[index];
    const correctColor = sequence[currentStep];

    const newButtonColors = [...buttonColors];
    newButtonColors[index] = selectedColor;
    setButtonColors(newButtonColors);

    if (selectedColor === correctColor) {
      const newUserSequence = [...userSequence, selectedColor];
      setUserSequence(newUserSequence);

      if (newUserSequence.length === sequence.length) {
        setTimeout(() => {
          alert("Good Job! You've completed the sequence.");
          generateSequence(); 
        }, 500); 
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      setCurrentStep(0);
      setUserSequence([]);
      setButtonColors(Array(colors.length).fill(neutralColor)); 
    }
  };

  return (
    <div className="color-sequence-game">
      <div className="display-sequence">
        {sequence.map((color, index) => (
          <div key={index} className="display-color" style={{ backgroundColor: color }}></div>
        ))}
      </div>

      <ColorGrid
        colors={colors}
        buttonColors={buttonColors}
        handleColorClick={handleColorClick}
      />
    </div>
  );
};

export default ColorSequence;
