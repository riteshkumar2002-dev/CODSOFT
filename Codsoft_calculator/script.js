const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resultDisplayed = true;
      } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    if (resultDisplayed && !isNaN(value)) {
      // If the last action was "=", start new input on number press
      currentInput = value;
      resultDisplayed = false;
    } else {
      currentInput += value;
    }

    display.textContent = currentInput;
  });
});
