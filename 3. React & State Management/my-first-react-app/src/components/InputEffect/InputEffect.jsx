import { useEffect, useState } from "react";
import s from "./InputEffect.module.css";

function InputEffect() {
  const [name, setName]   = useState(() => localStorage.getItem("name")  ?? "");
  const [email, setEmail] = useState(() => localStorage.getItem("email") ?? "");

  useEffect(() => {
    const stored = localStorage.getItem("name") ?? "";
    if (name === stored) return;
    console.log("Змінено ім’я");
    localStorage.setItem("name", name);
  }, [name]);
  
  useEffect(() => {
    const stored = localStorage.getItem("email") ?? "";
    if (email === stored) return;
    console.log("Змінено email");
    localStorage.setItem("email", email);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Дані збережено");
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input className={s.input} type="text" name={name} value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше імʼя" />
      <input className={s.input} type="email" name={email} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ваша електронна адреса" autoComplete/>
      <button type="submit" className={s.button}>Submit</button>
    </form>
  )
}

export default InputEffect;