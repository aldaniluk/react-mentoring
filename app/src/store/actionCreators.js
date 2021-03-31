import { actionTypes } from './actionTypes';

function getMovies(dispatch, getState){
    var url = 'http://localhost:4000/movies';

    var state = getState();

    var filter = state.filter.selectedOption.name.toLowerCase();
    if(filter && filter != 'all'){
        url += `?filter=${filter}`;
    }

    var sorter = state.sorter.selectedOption.field.toLowerCase();
    if(sorter){
        url += (filter && filter != 'all' ? '&' : '?') + `sortBy=${sorter}`;
    }

    fetch(url)
        .then(res => res.json())
        .then(res => res.data)
        .then(res => dispatch({
            type: actionTypes.SET_MOVIES,
            data: res
        }))
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