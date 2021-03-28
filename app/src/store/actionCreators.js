import { actionTypes } from './actionTypes';

function getMovies(selectedFilterOption, selectedSorterOption){
    return {
        type: actionTypes.GET_MOVIES,
        data: {
            filterOption: selectedFilterOption,
            sorterOption: selectedSorterOption
        }
    }
}

function addMovie(movie){
    return {
        type: actionTypes.ADD_MOVIE,
        data: movie
    }
}

function setFilterOption(option){
    return {
        type: actionTypes.SET_FILTER,
        data: option
    }
}

function setSorterOption(option){
    return {
        type: actionTypes.SET_SORTER,
        data: option
    }
}

export { getMovies, addMovie, setFilterOption, setSorterOption }