import { actionTypes } from './actionTypes';

const globalUrl = 'http://localhost:4000';

function getMovies(dispatch, getState){
    var url = globalUrl + '/movies';

    var state = getState();

    var filter = state.filter.selectedOption.name.toLowerCase();
    if(filter && filter != 'all'){
        url += `?filter=${filter}`;
    }

    var sorter = state.sorter.selectedOption.field.toLowerCase();
    if(sorter){
        var sortOrder = state.sorter.asc ? 'asc' : 'desc';
        url += (filter && filter != 'all' ? '&' : '?') + `sortBy=${sorter}&sortOrder=${sortOrder}`;
    }

    fetch(url)
        .then(res => res.json())
        .then(res => res.data)
        .then(res => dispatch({
            type: actionTypes.SET_MOVIES,
            data: res
        }))
}

function deleteMovie(id){
    return (dispatch, getState) => {
        var url = globalUrl + `/movies/${id}`;

        fetch(url, {
            method: 'DELETE' 
        })
        .then(res => dispatch(getMovies));
    }
}

function addMovie(movie){
    return (dispatch, getState) => {
        var url = globalUrl + `/movies`;

        fetch(url, { 
            method: 'POST', 
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
            body: JSON.stringify(movie) 
        })
        .then(res => dispatch(getMovies));
    }
}

function updateMovie(movie){
    return (dispatch, getState) => {
        var url = globalUrl + `/movies`;

        fetch(url, { 
            method: 'PUT', 
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
            body: JSON.stringify(movie) 
        })
        .then(res => dispatch(getMovies));
    }
}

function setFilterOption(option){
    return {
        type: actionTypes.SET_FILTER,
        data: option
    }
}

function setSorterOption(option, asc){
    return {
        type: actionTypes.SET_SORTER,
        data: { option, asc }
    }
}

export { getMovies, deleteMovie, addMovie, updateMovie, setFilterOption, setSorterOption }