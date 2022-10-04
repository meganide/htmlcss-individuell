import { countAnimation } from './countAnimation.js';
import { showSidebar } from './hamburgerMenu.js';
import { priceSlider } from './priceSlider.js';
import { showSortAndFilter } from './showSortAndFilter.js';

function main() {
  showSidebar();
  if (window.location.href.includes('book.html')) {
    showSortAndFilter();
    priceSlider();
  } else {
    countAnimation();
  }
}

main();
