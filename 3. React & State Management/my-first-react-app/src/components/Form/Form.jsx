import { useState } from "react";
import s from './Form.module.css';

const Form = () => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  }
  return (
    <>
      <p className={s.form}>Ви ввели: {content}</p>
      <input className={s.input} type="text" onChange={handleChange} value={content} placeholder="Введіть щось..." />
      
    </>
  )
}

export default Form;