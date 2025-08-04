import { useState } from 'react';
import s from './InputText.module.css';

const InputText = () => {
  const [text, setText] = useState('');
  const isEnough = text.length >= 10;

  return (
    <>
      <input 
        className={s.input} 
        type="text" 
        value={text} 
        onChange={e => setText(e.target.value)} 
        placeholder="Введіть щось..."
      />
      <p className={isEnough ? s.valid : s.invalid}>
        {isEnough ? '✅ Достатньо символів' : '❌ Введіть ще'}
      </p>
    </>
  )
}

export default InputText;
