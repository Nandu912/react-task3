import React, { useState } from 'react';
import './App.css';
import './components/ColorPicker.css';
import ColorPicker from './components/ColorPicker';

function App() {
  const colors = ['red', 'brown', 'lightgreen','green', 'blue', 'yellow', 'purple', 'lightblue', 'orange', 'teal', 'violet'];
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Color Picker</h1>
        <div className="inner-container" style={{ backgroundColor: selectedColor }}>
          <ColorPicker colors={colors} onColorSelect={handleColorSelect} />
        </div>
      </div>
    </div>
  );
}

export default App;
