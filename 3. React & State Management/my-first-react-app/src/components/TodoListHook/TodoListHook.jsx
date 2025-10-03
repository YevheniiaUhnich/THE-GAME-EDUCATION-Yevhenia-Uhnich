import { memo, useCallback, useState } from "react";

const TodoItem = memo(function TodoItem({ id, text, done, onComplete }) {
  const handleClick = useCallback(() => {
    onComplete(id);
  }, [id, onComplete]);
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={handleClick}
          autoComplete="on"
        />
        {text}
      </label>
    </li>
  );
});

export default function TodoListHook() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Завдання 1", done: false },
    { id: 2, text: "Завдання 2", done: true },
    { id: 3, text: "Завдання 3", done: false },
  ]);

  const onComplete = useCallback((id) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, [])
  return (<ul>
    {todos.map((t) => (
      <TodoItem key={t.id} id={t.id} text={t.text} done={t.done} onComplete={onComplete} />
    ))}
  </ul>
  )
}