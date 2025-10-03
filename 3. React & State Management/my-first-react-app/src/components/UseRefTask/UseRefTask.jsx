import { useRef } from "react"

export default function UseRefTask() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus({ preventScroll: true });
    
  };
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <input ref={inputRef} type="text" placeholder="Введіть текст..." autoComplete="off" />
      <button onClick={handleFocus}>Фокус</button>
    </div>
    
  )
}