let displayValue = "";
let isOperatorAppended = false;

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (isOperatorAppended) {
    displayValue = displayValue.slice(0, -1);
  }
  displayValue += operator;
  isOperatorAppended = true;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
  isOperatorAppended = false;
}

updateDisplay();
