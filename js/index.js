import { countAnimation } from './countAnimation.js';
import { showSidebar } from './hamburgerMenu.js';
import { priceSlider } from './priceSlider.js';
import { showSortAndFilter } from './showSortAndFilter.js';

function main() {
  showSidebar();
  if (window.location.href.includes('book.html')) {
    showSortAndFilter();
    priceSlider();
  } else if (window.location.href.includes('about.html')) {
    particlesJS.load('particles-js', '../assets/particlesjs-config.json', function () {
    });
  } else {
    countAnimation();
  }
}

main();
