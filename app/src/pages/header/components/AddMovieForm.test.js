import React from 'react';
import { AddMovieForm } from './AddMovieForm.jsx';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('AddMovieForm UI testing', () => {
    render(<AddMovieForm />);

    let header = screen.queryByText('ADD MOVIE')
    expect(header).toBeInTheDocument();

    let titleLabel = screen.queryByText('TITLE')
    expect(titleLabel).toBeInTheDocument();
    let titleInput = screen.getByTitle('title');
    expect(titleInput).toBeInTheDocument();

    let releaseDateLabel = screen.queryByText('RELEASE DATE')
    expect(releaseDateLabel).toBeInTheDocument();
    let releaseDateInput = screen.getByTitle('release_date');
    expect(releaseDateInput).toBeInTheDocument();

    let posterPathLabel = screen.queryByText('MOVIE URL')
    expect(posterPathLabel).toBeInTheDocument();
    let posterPathInput = screen.getByTitle('poster_path');
    expect(posterPathInput).toBeInTheDocument();

    let genresLabel = screen.queryByText('GENRES')
    expect(genresLabel).toBeInTheDocument();
    let genresInput = screen.getByTitle('genres');
    expect(genresInput).toBeInTheDocument();

    let overviewLabel = screen.queryByText('OVERVIEW')
    expect(overviewLabel).toBeInTheDocument();
    let overviewInput = screen.getByTitle('overview');
    expect(overviewInput).toBeInTheDocument();

    let runtimeLabel = screen.queryByText('RUNTIME')
    expect(runtimeLabel).toBeInTheDocument();
    let runtimeInput = screen.getByTitle('runtime');
    expect(runtimeInput).toBeInTheDocument();

    let submitButton = screen.queryByText('SUBMIT')
    expect(submitButton).toBeInTheDocument();

    let resetButton = screen.queryByText('RESET')
    expect(resetButton).toBeInTheDocument();

    // fireEvent.submit(form, {
    //     preventDefault: 
    // })
});

let titleCorrectValue = 'Some Movie';
let releaseDateCorrectValue = '2021-01-01';
let posterPathCorrectValue = 'http://some_url';
let genresCorrectValue = 'Crime,Horror';
let overviewCorrectValue = 'Some overview';
let runtimeCorrectValue = '123';

let setInput = (inputTitle, value) => {
    let input = screen.getByTitle(inputTitle);
    fireEvent.change(input, { target: { value: value } });
} 

it('AddMovieForm happy path testing', async () => {
    let onSubmitDispatch = jest.fn();
    let onSubmitClose = jest.fn();

    render(<AddMovieForm dispatch={onSubmitDispatch} close={onSubmitClose} />);

    setInput('title', titleCorrectValue);
    setInput('release_date', releaseDateCorrectValue);
    setInput('poster_path', posterPathCorrectValue);
    setInput('genres', genresCorrectValue);
    setInput('overview', overviewCorrectValue);
    setInput('runtime', runtimeCorrectValue);

    let submitButton = screen.queryByText('SUBMIT');

    fireEvent.click(submitButton);

    await waitFor(() => expect(onSubmitDispatch).toBeCalled());
    await waitFor(() => expect(onSubmitClose).toBeCalled());
});

let checkInput = async (input, value, errorText) => {
    let onSubmitDispatch = jest.fn();
    let onSubmitClose = jest.fn();

    render(<AddMovieForm dispatch={onSubmitDispatch} close={onSubmitClose} />);

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
    expect(onSubmitDispatch).not.toBeCalled();
    expect(onSubmitClose).not.toBeCalled();
}

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