export function showSortAndFilter() {
  const showSortButton = document.querySelector('.room-list__sort');
  const sortSection = document.querySelector('.sort');
  const filterResultsButton = document.querySelector('.sort__filter-btn');
  const closeIcon = document.querySelector('.sort__close-icon');
  const roomListSection = document.querySelector('.room-list');

  showSortButton.addEventListener('click', () => {
    sortSection.classList.add('showSort');
    roomListSection.classList.add('hide');
  });

  closeIcon.addEventListener('click', () => {
    sortSection.classList.remove('showSort');
    roomListSection.classList.remove('hide');
    window.scrollTo(0, 0);
  });

  filterResultsButton.addEventListener('click', () => {
    sortSection.classList.remove('showSort');
    roomListSection.classList.remove('hide');
    window.scrollTo(0, 0);
  });
}
