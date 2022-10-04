export function priceSlider() {
  const slider = document.getElementById('price-slider');
  const priceOutput = document.querySelector('.price-output');

  priceOutput.innerHTML = slider.value;

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = () => {
    priceOutput.innerHTML = slider.value;
  };
}
