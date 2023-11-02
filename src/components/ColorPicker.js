import React, { useState } from 'react';

function ColorPicker({ colors, onColorSelect }) {
  const [isColorListVisible, setIsColorListVisible] = useState(false);

  const toggleColorList = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    onColorSelect(color);
    setIsColorListVisible(false);
  };

  return (
    <div>
      <button onClick={toggleColorList} style={{ backgroundColor: 'green' }}>Pick a color</button>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
