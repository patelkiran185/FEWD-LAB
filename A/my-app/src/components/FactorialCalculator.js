import React, { useState, useMemo } from "react";

function FactorialCalculator() {
  const [number, setNumber] = useState(1);
  const [input, setInput] = useState(1);

  const factorial = useMemo(() => {
    console.log("Computing factorial...");
    const computeFactorial = (n) => {
      if (n < 0) return 0;
      if (n === 0 || n === 1) return 1;
      return n * computeFactorial(n - 1);
    };
    return computeFactorial(number);
  }, [number]); // 🧠 Recomputes only when `number` changes

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(Number(input));
  };

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          min="0"
        />
        <button type="submit">Calculate</button>
      </form>
      <p>Factorial of {number} is: {factorial}</p>
    </div>
  );
}

export default FactorialCalculator;
