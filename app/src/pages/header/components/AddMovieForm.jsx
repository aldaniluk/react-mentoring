import styled from 'styled-components';
import { FormComponent, FormOptionName, FormOptionInput, FormOptionDropdown, ColoredButton, TransparentButton } from '@globalComponents'
import { useState, useEffect } from 'react'
import { store } from '@store/store';
import { addMovie } from '@store/actionCreators';
import React from 'react';

const Title = styled.div`
    color: white;
    font-size: 30px;
`

const ButtonContainer = styled.div`
    margin-top: 40px;
    text-align: right;
`

const ColoredButtonWrapper = styled(ColoredButton)`
    margin-left: 10px;
`

function AddMovieForm(props) {
    const [title, setTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [url, setUrl] = useState('');
    const [genres, setGenres] = useState('');
    const [overview, setOverview] = useState('');
    const [runtime, setRuntime] = useState(0);

    function confirmAdd(event){
        event.preventDefault();
        var movie = {
            title: title,
            release_date: releaseDate,
            poster_path: url,
            genres: genres.split(','),
            overview: overview,
            runtime: Number.parseInt(runtime)
        }

        store.dispatch(addMovie(movie));
        props.close();
    }

    return (
        <FormComponent>
            <Title>ADD MOVIE</Title>
            <FormOptionName>TITLE</FormOptionName>
            <FormOptionInput placeholder='Title here' onChange={event => setTitle(event.target.value)} />
            <FormOptionName>RELEASE DATE</FormOptionName>
            <FormOptionInput placeholder='Release date here' onChange={event => setReleaseDate(event.target.value)} />
            <FormOptionName>MOVIE URL</FormOptionName>
            <FormOptionInput placeholder='Movie URL here' onChange={event => setUrl(event.target.value)} />
            <FormOptionName>GENRES</FormOptionName>
            <FormOptionInput placeholder='Genres here' onChange={event => setGenres(event.target.value)} />
            {/* <FormOptionDropdown>
                {
                    genres.map(genre => (
                            <option key={genre.id}>
                                {genre.name}
                            </option>
                        )
                    )
                }
            </FormOptionDropdown> */}
            <FormOptionName>OVERVIEW</FormOptionName>
            <FormOptionInput placeholder='Overview here' onChange={event => setOverview(event.target.value)} />
            <FormOptionName>RUNTIME</FormOptionName>
            <FormOptionInput placeholder='Runtime here' onChange={event => setRuntime(event.target.value)} />
            <ButtonContainer>
                <TransparentButton onClick={props.close}>RESET</TransparentButton>
                <ColoredButtonWrapper onClick={confirmAdd}>SUBMIT</ColoredButtonWrapper>
            </ButtonContainer>
        </FormComponent>
    )
}

export { AddMovieForm }