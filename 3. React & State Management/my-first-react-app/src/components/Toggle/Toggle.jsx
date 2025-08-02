import { useState } from "react";

const Toggle = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }
  return (
    <>
      {click && <p>Привіт, React</p>}
      <button type="button" onClick={handleClick}>{click ? 'Сховати' : 'Показати'}</button>
    </>
  )
}

export default Toggle;