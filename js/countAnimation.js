// Count animation for numbers at stats section on index.html

let valueDisplays = document.querySelectorAll('.stats__number');
let interval = 100;

function countAnimation() {
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      if (valueDisplay.className.includes('percentage')) {
        valueDisplay.textContent = startValue + '%';
      } else if (valueDisplay.className.includes('exp')) {
        valueDisplay.textContent = startValue + '/10';
      } else {
        valueDisplay.textContent = startValue;
      }
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
}

countAnimation();