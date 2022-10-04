export function showSortAndFilter() {
  const showSortButton = document.querySelector(".room-list__sort");
  const sortSection = document.querySelector(".sort");
  const filterResultsButton = document.querySelector(".sort__filter-btn")
  const closeIcon = document.querySelector(".sort__close-icon");

  showSortButton.addEventListener("click", () => {
    sortSection.classList.add("showSort");
  })

  closeIcon.addEventListener("click", () => {
    sortSection.classList.remove("showSort");
  })

  filterResultsButton.addEventListener("click", () => {
    sortSection.classList.remove("showSort");
  })
  
}