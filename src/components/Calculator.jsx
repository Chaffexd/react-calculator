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
    <div>
      <h1>Calculator</h1>
      <input type="text" value={value} disabled />
      <br />
      <button onClick={() => handleDigitClick("1")}>1</button>
      <button onClick={() => handleDigitClick("2")}>2</button>
      <button onClick={() => handleDigitClick("3")}>3</button>
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <br />
      <button onClick={() => handleDigitClick("4")}>4</button>
      <button onClick={() => handleDigitClick("5")}>5</button>
      <button onClick={() => handleDigitClick("6")}>6</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <br />
      <button onClick={() => handleDigitClick("7")}>7</button>
      <button onClick={() => handleDigitClick("8")}>8</button>
      <button onClick={() => handleDigitClick("9")}>9</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <br />
      <button onClick={() => handleDigitClick("0")}>0</button>
      <button onClick={() => handleEqualsClick()}>=</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
      <button onClick={() => setValue("0")}>C</button>
    </div>
  );
}

export default Calculator;
