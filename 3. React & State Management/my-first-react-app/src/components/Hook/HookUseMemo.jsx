import { useMemo, useState } from "react";

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function useMemoize() {
  const [showEven, setShowEven] = useState(false);

  const filteredNumbers = useMemo(() => {
    console.log("Фільтрація...");
    return showEven ? NUMBERS.filter((n) => n % 2 === 0) : NUMBERS;
  }, [showEven]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showEven}
          onChange={() => setShowEven(!showEven)}
        />
        Показати тільки парні числа
      </label>
      <ul>
        {filteredNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}