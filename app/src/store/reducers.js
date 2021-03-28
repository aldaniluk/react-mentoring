import { combineReducers } from 'redux';
import { actionTypes } from './actionTypes';
import moviesFromJson from '@assets/data/movies';
import { initialState } from './initialState';

function moviesReducer(state = initialState.movies, action){
    switch(action.type){
        case actionTypes.GET_MOVIES:
            return getMovies(action.data);
        case actionTypes.ADD_MOVIE:
            moviesFromJson.push(action.data);
            return moviesFromJson;
        default:
            return state;
    }
}

function getMovies(options){
    var movies = [...moviesFromJson];
    if(options.filterOption && options.filterOption.name.toLowerCase() !== 'all'){
        movies = movies.filter(m => m.genre.toLowerCase() === options.filterOption.name.toLowerCase());
    }

    if(options.sorterOption){
        var field = options.sorterOption.field;
        
        movies = movies.sort((a, b) => {
            if(a[field] < b[field]) return -1;
            if(a[field] > b[field]) return 1;
            return 0;
        });
    }

    return movies;
}

function filterReducer(state = initialState.filter, action){
    switch(action.type){
        case actionTypes.SET_FILTER:
            return {
                options: state.options,
                selectedOption: action.data
            }
        default:
            return state;
    }
}  

function sorterReducer(state = initialState.sorter, action){
    switch(action.type){
        case actionTypes.SET_SORTER:
            return {
                options: state.options,
                selectedOption: action.data
            }
        default:
            return state;
    }
}  

const rootReducer = combineReducers({
    'movies': moviesReducer,
    'filter': filterReducer,
    'sorter': sorterReducer,
});

export { rootReducer }