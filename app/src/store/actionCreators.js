import { actionType } from './actionType';
import { selectedFilterSelector, selectedSorterSelector, selectedSorterAscSelector } from '@store/selectors';
import { getMoviesUrl, deleteMovieUrl, addMovieUrl, updateMovieUrl } from '@store/apiMap';
import { apiGetMovies, apiDeleteMovie, apiAddMovie, apiUpdateMovie } from '@store/apiRequest/';

function getMovies() {
    return (dispatch, getState) => {
        let state = getState();
        let filter = selectedFilterSelector(state).name;
        let sorter = selectedSorterSelector(state).field;
        let asc = selectedSorterAscSelector(state);

        let url = getMoviesUrl(filter, sorter, asc);

        apiGetMovies(url)
            .then(res => dispatch({
                type: actionType.SET_MOVIES,
                payload: res.data
            }))
    }
}

function deleteMovie(id){
    return (dispatch, getState) => {
        apiDeleteMovie(deleteMovieUrl(id))
            .then(() => dispatch(getMovies()));
    }
}

function addMovie(movie){
    return (dispatch, getState) => {
        apiAddMovie(addMovieUrl(), movie)
            .then(() => dispatch(getMovies()));
    }
}

function updateMovie(movie){
    return (dispatch, getState) => {
        apiUpdateMovie(updateMovieUrl(), movie)
            .then(() => dispatch(getMovies()));
    }
}

function setFilterOption(option){
    return {
        type: actionType.SET_FILTER,
        payload: option
    }
}

function setSorterOption(option, asc){
    return {
        type: actionType.SET_SORTER,
        payload: { option, asc }
    }
}

export { getMovies, deleteMovie, addMovie, updateMovie, setFilterOption, setSorterOption }