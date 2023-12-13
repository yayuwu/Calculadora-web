const displayActualValue = document.getElementById('display-actual-value');
const displayMathValue = document.getElementById('display-math-value');
const btnNumbers = document.querySelectorAll('.number');

const display = new Display(displayActualValue, displayMathValue);

btnNumbers.forEach(function (btn) {
    btn.addEventListener('click', () =>{
        display.addNumber(btn.innerHTML);
    });
});

