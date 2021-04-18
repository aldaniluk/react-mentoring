import { combineReducers } from 'redux';
import { actionType } from './actionType';
import { initialState } from './initialState';

function moviesReducer(state = initialState.movies, action){
    switch(action.type){
        case actionType.GET_MOVIES:
            return state;
        case actionType.SET_MOVIES:
            return action.payload;
        case actionType.DELETE_MOVIE:
            return action.payload;
        case actionType.ADD_MOVIE:
            return action.payload;
        case actionType.UPDATE_MOVIE:
            return action.payload;
        default:
            return state;
    }
}

function movieReducer(state = initialState.movies, action){
    switch(action.type){
        case actionType.GET_MOVIE:
            return state;
        case actionType.SET_MOVIE:
            return action.payload;
        default:
            return state;
    }
}

function filterReducer(state = initialState.filter, action){
    switch(action.type){
        case actionType.SET_FILTER:
            return {
                options: state.options,
                selectedOption: action.payload
            }
        default:
            return state;
    }
}  

function sorterReducer(state = initialState.sorter, action){
    switch(action.type){
        case actionType.SET_SORTER:
            return {
                options: state.options,
                selectedOption: action.payload.option,
                asc: action.payload.asc
            }
        default:
            return state;
    }
}  

const rootReducer = combineReducers({
    'movies': moviesReducer,
    'movie': movieReducer,
    'filter': filterReducer,
    'sorter': sorterReducer,
});

export { rootReducer }