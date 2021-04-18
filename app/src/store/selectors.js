let moviesSelector = store => store.movies;
let movieSelector = store => store.movie;
let selectedFilterSelector = store => store.filter.selectedOption;
let selectedSorterSelector = store => store.sorter.selectedOption;
let selectedSorterAscSelector = store => store.sorter.asc;

export { moviesSelector, movieSelector, selectedFilterSelector, selectedSorterSelector, selectedSorterAscSelector }