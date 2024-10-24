import React, { useState } from "react";

const App = () => {
  const [button, setButton] = useState(0);
  console.log("button>>>>>>>", button);

  const handleButton = (e) => {
    if (e === "increase") {
      setButton(button + 1);
    } else if (e === "decrease") {
      setButton(button === 0 ? 0 : button - 1);
    } else if (e === "reset") {
      setButton(0);
    }
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const increaseButtonStyle = {
    ...buttonStyle,
    backgroundColor: "green",
    color: "white",
  };

  const decreaseButtonStyle = {
    ...buttonStyle,
    backgroundColor: "red",
    color: "white",
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: "orange",
    color: "white",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>{button}</h3>
      <button
        style={increaseButtonStyle}
        onClick={() => handleButton("increase")}
      >
        Increase
      </button>
      <button
        style={decreaseButtonStyle}
        onClick={() => handleButton("decrease")}
      >
        Decrease
      </button>
      <button style={resetButtonStyle} onClick={() => handleButton("reset")}>
        Reset
      </button>
    </div>
  );
};

export default App;
