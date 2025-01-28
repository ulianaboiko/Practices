const firstField = document.querySelector("#secondNumber");
const secondField = document.querySelector("#secondNumber");
const actionSelect = document.querySelector("#action");
const equalButton = document.querySelector("#equal");

equalButton.addEventListener("click", () => {
  const firstNumber = parseFloat(firstField.value);
  const secondNumber = parseFloat(secondField.value);
  const action = actionSelect.value;
  let result;

  switch (action) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) {
        alert("На нуль ділити не можна");
        return;
      }
      result = firstNumber / secondNumber;
      break;
    default:
      alert("Операція не вірна");
  }
  alert("Результат: " + result);
});
