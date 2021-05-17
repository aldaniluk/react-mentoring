import { actionType } from './actionType';
import { selectedFilterSelector, selectedSorterSelector, selectedSorterAscSelector } from '@store/selectors';
import { getMoviesUrl, getMovieUrl, deleteMovieUrl, addMovieUrl, updateMovieUrl } from '@store/apiMap';
import { apiGet, apiDelete, apiAdd, apiUpdate } from '@store/apiRequest';

function getMovies(search) {
    return (dispatch, getState) => {
        let state = getState();
        let filter = selectedFilterSelector(state).name;
        let sorter = selectedSorterSelector(state).field;
        let asc = selectedSorterAscSelector(state);

        let url = getMoviesUrl(filter, sorter, asc, search);

        return apiGet(url)
            .then(res => dispatch({
                type: actionType.SET_MOVIES,
                payload: res.data
            }))
    }
}

function getMovie(id){
    return (dispatch, getState) => {
        let url = getMovieUrl(id);

        apiGet(url)
            .then(res => dispatch({
                type: actionType.SET_MOVIE,
                payload: res
            }))
    }
}

function deleteMovie(id){
    return (dispatch, getState) => {
        return apiDelete(deleteMovieUrl(id))
            .then(() => getMovies()(dispatch, getState));
    }
}

function addMovie(movie){
    return (dispatch, getState) => {
        return apiAdd(addMovieUrl(), movie)
            .then(() => getMovies()(dispatch, getState));
    }
}

function updateMovie(movie){
    return (dispatch, getState) => {
        return apiUpdate(updateMovieUrl(), movie)
            .then(() => getMovies()(dispatch, getState));
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

export { getMovies, getMovie, deleteMovie, addMovie, updateMovie, setFilterOption, setSorterOption }