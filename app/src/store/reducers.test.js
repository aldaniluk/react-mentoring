import { moviesReducer } from './reducers';
import { initialState } from './initialState';
import { actionType } from './actionType';

describe('movies reducer', () => {
    it('not matched action type', () => {
        let value = moviesReducer(undefined, {
            type: actionType.SET_SORTER
        })

        expect(value).toEqual(initialState.movies);
    })

    it('get movies', () => {
        let value = moviesReducer(['movie1','movie2'], {
            type: actionType.GET_MOVIES
        })

        expect(value).toEqual(['movie1','movie2']);
    })

    it('set movies', () => {
        let value = moviesReducer(['movie1','movie2'], {
            type: actionType.SET_MOVIES,
            payload: ['movie1','movie3']
        })

        expect(value).toEqual(['movie1','movie3']);
    })

    it('delete movie', () => {
        let value = moviesReducer(['movie1','movie2'], {
            type: actionType.DELETE_MOVIE,
            payload: ['movie1']
        })

        expect(value).toEqual(['movie1']);
    })

    it('add movie', () => {
        let value = moviesReducer(['movie1','movie2'], {
            type: actionType.ADD_MOVIE,
            payload: ['movie1','movie2','movie3']
        })

        expect(value).toEqual(['movie1','movie2','movie3']);
    })

    it('update movie', () => {
        let value = moviesReducer(['movie1','movie2'], {
            type: actionType.UPDATE_MOVIE,
            payload: ['movie1','movie22']
        })

        expect(value).toEqual(['movie1','movie22']);
    })
});
