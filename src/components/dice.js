import React from 'react';
import './diceStyles.css'; // Import CSS file containing styles used by Dice component


const Dice = ({ diceFaces }) => {
  return (
    <div className="horizontal-dice">
      {diceFaces.map((face, index) => (
        <img key={index} src={face} alt={`Dice face ${index + 1}`} className="image" />
      ))}
    </div>
  );
};

export default Dice;
