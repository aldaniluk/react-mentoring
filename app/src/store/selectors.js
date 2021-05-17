let moviesSelector = store => store.movies;
let selectedFilterSelector = store => store.filter.selectedOption;
let selectedSorterSelector = store => store.sorter.selectedOption;
let selectedSorterAscSelector = store => store.sorter.asc;

export { moviesSelector, selectedFilterSelector, selectedSorterSelector, selectedSorterAscSelector }