import { useState } from "react";
import s from './ColorButton.module.css';

const ColorButton = () => {
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setColor(prevColor => prevColor === 'black' ? 'red' : 'black');
  }
  return (
    <>
      <button className={s.btnColor} onClick={handleClick} style={{ color: color }}>Натисни мене</button>
    </>
  )
}

export default ColorButton;