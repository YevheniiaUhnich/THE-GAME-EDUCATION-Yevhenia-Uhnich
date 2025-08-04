import { useState } from "react";
import s from './Button.module.css';

const Button = () => {
  const [text, setText] = useState('');
  const handleClick = () => {
      alert('Hello, friends');
  };
  
  const handleChange = (e) => {
     setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your form sent');
  }

  const handleOnMouseOver = () => {
    alert('You hover on button');
  }

  const handleOnKeyDown = (e) => {
    console.log('click:', e.key);

    if (e.key === 'Enter') {
      alert('the Enter is pressed');

      if (e.key === 'Escape') {
        alert('the Escape is pressed');
    }
    }
  }
  
  return (
    <>
    <button className={s.btnOnClick} onClick={handleClick}>Click for me</button>
      <div>
      <p className={s.textTitle}>Write your text: {text}</p>
        <input className={s.input} type="text" onChange={handleChange} />  
      </div>
      
      <form className={s.form} onSubmit={handleSubmit}>
        <input className={s.input} type="text" name="text" />
        <label className={s.label} name="text" ></label>

        <button className={s.btnForm} type="submit">send</button>
      </form>

      <button className={s.btmMouse} type="button" onMouseOver={handleOnMouseOver}>Hover on me</button>

      <input className={s.input} type="text" placeholder="click on me" onKeyDown={handleOnKeyDown}/>
      </>
  )
}

export default Button;