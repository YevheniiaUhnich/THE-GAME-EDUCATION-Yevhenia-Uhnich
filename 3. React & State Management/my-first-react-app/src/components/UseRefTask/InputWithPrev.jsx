import { useEffect, useState, useRef } from "react";

export default function InputWithPrev() {
  const [value, setVulue] = useState("");
  const inputRef = useRef(null);


useEffect(() => {
  inputRef.current = value;
}, [value]);

return (
  <div style={{ display: "grid", gap: 8, maxWidth: 360 }}>
    <input
      type="text"
      value={value}
      autoComplete="off"
      onChange={(e) => setVulue(e.target.value)}
      ref={inputRef}
      placeholder="Введи текст"
    />
    <p>ПоточнеПоточне значення: {value}</p>
    <p>Попереднє значення: {inputRef.current}</p>
  </div>
); 
}