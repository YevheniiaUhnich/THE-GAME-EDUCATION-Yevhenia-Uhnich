import { useState } from "react";

const Form = () => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  }
  return (
    <>
      <p>Ви ввели: {content}</p>
      <input type="text" onChange={handleChange} value={content} placeholder="Введіть щось..." />
      
    </>
  )
}

export default Form;