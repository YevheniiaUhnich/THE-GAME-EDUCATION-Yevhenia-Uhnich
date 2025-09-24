import s from "./Uncontrolled.module.css";

function Uncontrolled() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const age = formData.get("age");

    alert(`Name: ${name}, age: ${age}`);
  }
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>Name:
        <input type="text" name="name" defaultValue="Yevheniia" className={s.input} />
      </label>
      <label className={s.label}>Age:
        <input type="number" name="age" placeholder="..." className={s.input}/>
      </label>
      <button type="submit" className={s.button} >Submit</button>

    </form>
  )
}

export default Uncontrolled;