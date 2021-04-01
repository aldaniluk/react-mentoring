import { combineReducers } from 'redux';
import { actionTypes } from './actionTypes';
import { initialState } from './initialState';

function moviesReducer(state = initialState.movies, action){
    switch(action.type){
        case actionTypes.GET_MOVIES:
            return state;
        case actionTypes.SET_MOVIES:
            return action.data;
        case actionTypes.DELETE_MOVIE:
            return action.data;
        case actionTypes.ADD_MOVIE:
            return action.data;
        case actionTypes.UPDATE_MOVIE:
            return action.data;
        default:
            return state;
    }
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
                selectedOption: action.data.option,
                asc: action.data.asc
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