import React from 'react';
import { AddMovieForm } from './AddMovieForm.jsx';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Movie } from '@models';

const checkInput = async (input, value, errorText) => {
    let onSubmitAddMovie = jest.fn();
    let onSubmitClose = jest.fn();

    render(<AddMovieForm addMovie={onSubmitAddMovie} close={onSubmitClose} />);

    if(input != 'title'){
        setInput('title', titleCorrectValue);
    } 
    else if(value) {
        setInput('title', value);
    }

    if(input != 'release_date'){
        setInput('release_date', releaseDateCorrectValue);
    } 
    else if(value) {
        setInput('release_date', value);
    }

    if(input != 'poster_path'){
        setInput('poster_path', posterPathCorrectValue);
    } 
    else if(value) {
        setInput('poster_path', value);
    }

    if(input != 'genres'){
        setInput('genres', genresCorrectValue);
    } 
    else if(value) {
        setInput('genres', value);
    }

    if(input != 'overview'){
        setInput('overview', overviewCorrectValue);
    } 
    else if(value) {
        setInput('overview', value);
    }

    if(input != 'runtime'){
        setInput('runtime', runtimeCorrectValue);
    } 
    else if(value) {
        setInput('runtime', value);
    }

    let submitButton = screen.queryByText('SUBMIT');

    fireEvent.click(submitButton);

    let error = await screen.findByText(errorText);
    expect(error).toBeInTheDocument();
    expect(onSubmitAddMovie).not.toBeCalled();
    expect(onSubmitClose).not.toBeCalled();
}

const titleCorrectValue = 'Some Movie';
const releaseDateCorrectValue = '2021-01-01';
const posterPathCorrectValue = 'http://some_url';
const genresCorrectValue = 'Crime,Horror';
const overviewCorrectValue = 'Some overview';
const runtimeCorrectValue = '123';

const setInput = (inputTitle, value) => {
    let input = screen.getByTitle(inputTitle);
    fireEvent.change(input, { target: { value: value } });
} 

describe('AddMovieForm', () => {
    it('AddMovieForm UI testing', () => {
        const { asFragment } = render(<AddMovieForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('AddMovieForm happy path testing', async () => {
        let onSubmitAddMovie = jest.fn();
        let onSubmitClose = jest.fn();

        render(<AddMovieForm addMovie={onSubmitAddMovie} close={onSubmitClose} />);

        setInput('title', titleCorrectValue);
        setInput('release_date', releaseDateCorrectValue);
        setInput('poster_path', posterPathCorrectValue);
        setInput('genres', genresCorrectValue);
        setInput('overview', overviewCorrectValue);
        setInput('runtime', runtimeCorrectValue);

        let submitButton = screen.queryByText('SUBMIT');

        fireEvent.click(submitButton);

        let movie = new Movie(titleCorrectValue, releaseDateCorrectValue, posterPathCorrectValue, genresCorrectValue.split(','), overviewCorrectValue, Number.parseInt(runtimeCorrectValue));

        await waitFor(() => expect(onSubmitAddMovie).toHaveBeenCalledWith(movie));
        await waitFor(() => expect(onSubmitClose).toBeCalled());
    });

    it('AddMovieForm Title input testing: value is required', 
        () => checkInput('title', null, 'Title is required'));

    it('AddMovieForm Release date input testing: value is required', 
        () => checkInput('release_date', null, 'Release date is required'));

    it('AddMovieForm Release date input testing: value is incorrect', 
        () => checkInput('release_date', 'incorrect value', 'Release date must be in format yyyy-mm-dd'));

    it('AddMovieForm Url input testing: value is required', 
        () => checkInput('poster_path', null, 'Url is required'));

    it('AddMovieForm Url input testing: value is incorrect', 
        () => checkInput('poster_path', 'incorrect value', 'Url is incorrect'));

    it('AddMovieForm Genres input testing: value is required', 
        () => checkInput('genres', null, 'Genres are required'));

    it('AddMovieForm Genres input testing: value is incorrect', 
        () => checkInput('genres', 'Crime,Horro1', 'Some of genres are incorrect'));

    it('AddMovieForm Overview input testing: value is required', 
        () => checkInput('overview', null, 'Overview is required'));

    it('AddMovieForm Runtime input testing: value is required', 
        () => checkInput('runtime', null, 'Runtime is required'));

    it('AddMovieForm Runtime input testing: value is incorrect (!=integer)', 
        () => checkInput('runtime', 'text', 'Runtime must be an integer'));

    it('AddMovieForm Runtime input testing: value is incorrect (==0)', 
        () => checkInput('runtime', '0', 'Runtime must be greater that 0'));
})