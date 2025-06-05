/* eslint-disable no-eval */
import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("0");
  const [resetNext, setResetNext] = useState(false);

  const handleClick = (value) => {
    if (!isNaN(value) || value === ".") {
      if (input === "0" || resetNext) {
        setInput(value);
        setResetNext(false);
      } else {
        setInput((prev) => prev + value);
      }
    } else if (value === "AC") {
      setInput("0");
    } else if (value === "DEL") {
      setInput((prev) => prev.length === 1 ? "0" : prev.slice(0, -1));
    } else if (["+", "-", "*", "/", "%"].includes(value)) {
      if (!["+", "-", "*", "/", "%"].includes(input.slice(-1))) {
        setInput((prev) => prev + value);
      }
    } else if (value === "=") {
      try {
        const result = eval(input).toString();
        setInput(result);
        setResetNext(true);
      } catch {
        setInput("Error");
        setResetNext(true);
      }
    }
  };

  const buttons = [
    "AC", "%", "DEL", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "00", "0", ".", "="
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="calculator-container rounded-3xl overflow-hidden w-full max-w-md border border-gray-700">
        <div className="display p-6">
          <div className="bg-gray-800/80 rounded-xl p-5 shadow-inner">
            <input
              type="text"
              className="w-full bg-transparent text-right text-4xl font-bold text-white display-input outline-none tracking-wider"
              value={input}
              disabled
            />
          </div>
        </div>

        <div className="button-grid p-6">
          {buttons.map((btn, i) => {
            const base = "button font-bold py-5 rounded-xl text-lg";
            const type = btn === "="
              ? "equals"
              : ["+", "-", "*", "/", "%"].includes(btn)
                ? "operator"
                : ["AC", "DEL"].includes(btn)
                  ? "function"
                  : "number";
            return (
              <button
                key={i}
                onClick={() => handleClick(btn)}
                className={`${base} ${type} text-white`}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
