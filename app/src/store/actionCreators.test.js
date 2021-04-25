import { initialState } from './initialState';
import { getMovies, deleteMovie, addMovie, updateMovie } from './actionCreators';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import * as apiMap from '@store/apiMap';
import { Movie } from '@models';

describe('movies actions', () => {
    let store;
    beforeEach(() => {
        store = configureStore([thunk])(initialState);
    })

    apiMap.getMoviesUrl =  jest.fn(() => 'url');
    apiMap.deleteMovieUrl =  jest.fn(id => 'delete_url/' + id);
    apiMap.addMovieUrl =  jest.fn(() => 'add_url');
    apiMap.updateMovieUrl =  jest.fn(() => 'update_url');

    fetchMock.get('url', {
        body: { data: ['movie1', 'movie2'] },
        headers: { 'content-type': 'application/json' }
    })

    let expectedAction = { 
        type: 'SET_MOVIES', 
        payload: [ 'movie1', 'movie2' ] 
    };

    it('get movies', () => {
        store.dispatch(getMovies()).then(() => {
            expect(store.getActions()).toEqual([ expectedAction ]);
        })
    })

    it('delete movie', () => {
        let deleteMovieId = 11;
        fetchMock.delete('delete_url/' + deleteMovieId, {})

        store.dispatch(deleteMovie(deleteMovieId)).then(() => {
            expect(store.getActions()).toEqual([ expectedAction ]);
        })
    })

    it('add movie', () => {
        let movie = new Movie('movie1', '2021-01-01', 'http://url', 'Crime', 'overview', 123);
        fetchMock.post('add_url', {
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(movie) 
        })

        store.dispatch(addMovie(movie)).then(() => {
            expect(store.getActions()).toEqual([ expectedAction ]);
        })
    })

    it('update movie', () => {
        let movie = new Movie(11, 'movie1', '2021-01-01', 'http://url', 'Crime', 'overview', 123);
        fetchMock.put('update_url', {
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(movie) 
        })

        store.dispatch(updateMovie(movie)).then(() => {
            expect(store.getActions()).toEqual([ expectedAction ]);
        })
    })
});
