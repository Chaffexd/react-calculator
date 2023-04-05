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
    <div className="w-5/12">
        <div className="flex justify-between p-4">
            <h1>calc</h1>
            <div>
                <p>Theme</p>
            </div>
        </div>
        <div className="">
            <input type="text" value={value} disabled className="primary-input-display w-full text-right p-6 rounded mb-4" />
        </div>
        <div className="p-4 primary-keypad-background rounded">
            <div className="flex justify-between mb-4">
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleDigitClick("7")}>7</button>
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleDigitClick("8")}>8</button>
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleDigitClick("9")}>9</button>
                <button className="bg-key-primary p-2 w-20 rounded" onClick={() => setValue("0")}>DEL</button>
            </div>
            <div className="flex justify-between mb-4">
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleDigitClick("4")}>4</button>
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleDigitClick("5")}>5</button>
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleDigitClick("6")}>6</button>
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleOperatorClick("+")}>+</button>
            </div>
            <div className="flex justify-between mb-4">
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleDigitClick("1")}>1</button>
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleDigitClick("2")}>2</button>
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleDigitClick("3")}>3</button>
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleOperatorClick("-")}>-</button>
            </div>
            <div className="flex justify-between mb-4">
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleOperatorClick("/")}>.</button> 
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleDigitClick("0")}>0</button>
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleOperatorClick("/")}>/</button>
                <button className="bg-key primary-text-color p-2 w-20 rounded" onClick={() => handleOperatorClick("*")}>x</button>
            </div>
            <div className="flex justify-between gap-7">
                <button className="bg-key-primary p-2 w-1/2 rounded" onClick={() => setValue("0")}>RESET</button>
                <button className="bg-key-red p-2 w-1/2 rounded" onClick={() => handleEqualsClick()}>=</button>
            </div>
        </div>
    </div>
  );
}

export default Calculator;
