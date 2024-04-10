document.addEventListener("DOMContentLoaded", function () {
  const inputValue = document.getElementById("user-input");
  let expression = "";
  let currentInput = "";
  let lastOperator = null;

  document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
      currentInput += e.target.innerText.trim();
      inputValue.innerText = expression + currentInput;
    });
  });

  document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
      const operator = e.target.innerText.trim();

      if (operator === "=") {
        if (lastOperator) {
          expression += currentInput;
          inputValue.innerText = eval(expression).toString();
          expression = "";
          currentInput = "";
          lastOperator = null;
        }
      } else if (operator === "AC") {
        expression = "";
        currentInput = "";
        inputValue.innerText = "0";
        lastOperator = null;
      } else if (operator === "DEL") {
        currentInput = currentInput.slice(0, -1);
        inputValue.innerText = expression + currentInput;
      } else {
        if (lastOperator) {
          expression = expression.slice(0, -1) + operator;
        } else {
          expression += currentInput + operator;
        }
        currentInput = "";
        inputValue.innerText = expression;
        lastOperator = operator;
      }
    });
  });
});
