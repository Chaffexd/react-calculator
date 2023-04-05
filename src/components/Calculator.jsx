import React, { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  function handleDigitClick(digit) {
    if (value === "0") {
      setValue(digit);
    } else {
      setValue(value + digit);
    }
  }

  function handleOperatorClick(newOperator) {
    if (operator) {
      handleEqualsClick();
    }

    setOperator(newOperator);
    setPreviousValue(value);
    setValue("0");
  }

  function handleEqualsClick() {
    const currentValue = parseFloat(value);
    const previous = parseFloat(previousValue);

    switch (operator) {
      case "+":
        setValue(previous + currentValue);
        break;
      case "-":
        setValue(previous - currentValue);
        break;
      case "*":
        setValue(previous * currentValue);
        break;
      case "/":
        setValue(previous / currentValue);
        break;
      default:
        break;
    }

    setOperator(null);
    setPreviousValue(null);
  }

  return (
    <div className="w-2/4">
        <div className="flex justify-between p-4">
            <h1>calc</h1>
            <div>
                <p>Theme</p>
            </div>
        </div>
        <div className="p-4">
            <input type="text" value={value} disabled className="w-full text-right p-6 rounded mb-4" />
        </div>
        <div className="p-4">
            <div className="flex justify-between mb-2">
                <button className="bg-key p-2 w-20" onClick={() => handleDigitClick("7")}>7</button>
                <button className="bg-key p-2 w-20" onClick={() => handleDigitClick("8")}>8</button>
                <button className="bg-key p-2 w-20" onClick={() => handleDigitClick("9")}>9</button>
                <button className="bg-key-primary p-2 w-20" onClick={() => setValue("0")}>DEL</button>
            </div>
            <div className="flex justify-between mb-2">
                <button className="bg-key p-2 w-20" onClick={() => handleDigitClick("4")}>4</button>
                <button className="bg-key p-2 w-20" onClick={() => handleDigitClick("5")}>5</button>
                <button className="bg-key p-2 w-20" onClick={() => handleDigitClick("6")}>6</button>
                <button className="bg-key p-2 w-20" onClick={() => handleOperatorClick("+")}>+</button>
            </div>
            <div className="flex justify-between mb-2">
                <button className="bg-key p-2 w-20" onClick={() => handleDigitClick("1")}>1</button>
                <button className="bg-key p-2 w-20" onClick={() => handleDigitClick("2")}>2</button>
                <button className="bg-key p-2 w-20" onClick={() => handleDigitClick("3")}>3</button>
                <button className="bg-key p-2 w-20" onClick={() => handleOperatorClick("-")}>-</button>
            </div>
            <div className="flex justify-between mb-2">
                <button className="bg-key p-2 w-20" onClick={() => handleOperatorClick("/")}>.</button> 
                <button className="bg-key p-2 w-20" onClick={() => handleDigitClick("0")}>0</button>
                <button className="bg-key p-2 w-20" onClick={() => handleOperatorClick("/")}>/</button>
                <button className="bg-key p-2 w-20" onClick={() => handleOperatorClick("*")}>x</button>
            </div>
            <div>
                <button className="bg-key-primary p-2 w-20" onClick={() => setValue("0")}>RESET</button>
                <button className="bg-key-red p-2 w-20" onClick={() => handleEqualsClick()}>=</button>
            </div>
        </div>
    </div>
  );
}

export default Calculator;
