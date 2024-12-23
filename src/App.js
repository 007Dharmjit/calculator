"use client"
import React, { useState } from "react";

import axios from "axios";

function App() {
  const [disdata, setDisdata] = useState(""); // Store input as a string instead of an array


  const getData = (e) => {
    const data = e.target.innerHTML;

    // Check if the clicked value is a number or operator and append it to the input
    if (data.length < 4 && data !== "AC" && data !== "DEL" && data !== "=") {
      setDisdata((prevData) => prevData + data);
    }

    // Handle 'AC' (clear)
    if (data === "AC") {
      setDisdata("");
    }

    // Handle 'DEL' (delete last character)
    if (data === "DEL") {
      setDisdata((prevData) => prevData.slice(0, -1));
    }

    // Handle '=' (evaluate the expression)
    if (data === "=") {
      try {
        // eslint-disable-next-line no-eval
        setDisdata(eval(disdata).toString()); // Evaluate the expression and set the result
      } catch (error) {
        setDisdata("Error");
      }
    }
  };

  return (
    <>
      <div className="container h-screen w-screen bg-black text-white flex justify-center items-center">
        <div className="databox bg-zinc-800 h-fit w-[400px] p-5 rounded">
          <div className="w-full h-14 rounded px-2 py-1 justify-end flex bg-zinc-600">
            <input
              disabled
              value={disdata}
              className="h-full w-full bg-transparent outline-none"
            />
          </div>
          <div className="button grid grid-cols-4">
            <p onClick={getData}>AC</p>
            <p onClick={getData}>%</p>
            <p onClick={getData}>DEL</p>
            <p onClick={getData}>/</p>
            <p onClick={getData}>7</p>
            <p onClick={getData}>8</p>
            <p onClick={getData}>9</p>
            <p onClick={getData}>*</p>
            <p onClick={getData}>4</p>
            <p onClick={getData}>5</p>
            <p onClick={getData}>6</p>
            <p onClick={getData}>-</p>
            <p onClick={getData}>1</p>
            <p onClick={getData}>2</p>
            <p onClick={getData}>3</p>
            <p onClick={getData}>+</p>
            <p onClick={getData}>00</p>
            <p onClick={getData}>0</p>
            <p onClick={getData}>.</p>
            <p onClick={getData}>=</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
