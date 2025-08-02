import { useState } from "react";

const ColorButton = () => {
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setColor(prevColor => prevColor === 'black' ? 'red' : 'black');
  }
  return (
    <>
      <button onClick={handleClick} style={{ color: color }}>Натисни мене</button>
    </>
  )
}

export default ColorButton;