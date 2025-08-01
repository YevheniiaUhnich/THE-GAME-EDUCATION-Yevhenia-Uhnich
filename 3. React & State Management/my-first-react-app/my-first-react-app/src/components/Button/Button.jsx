import { useState } from "react";

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
    <button onClick={handleClick}>Click for me</button>
      <div>
      <p>Write your text: {text}</p>
        <input type="text" onChange={handleChange} />  
      </div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <label name="text" ></label>

        <button type="submit">send</button>
      </form>

      <button type="button" onMouseOver={handleOnMouseOver}>Hover on me</button>

      <input type="text" placeholder="click on me" onKeyDown={handleOnKeyDown}/>
      </>
  )
}

export default Button;