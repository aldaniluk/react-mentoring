import styled from 'styled-components';
import { FormComponent, FormOptionName, FormOptionInput, ColoredButton, TransparentButton } from '@globalComponents'
import { useState, useCallback } from 'react'
import { addMovie } from '@store/actionCreators';
import React from 'react';
import { Movie } from '@models';
import { connect } from 'react-redux';

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
    const [release_date, setReleaseDate] = useState('');
    const [poster_path, setUrl] = useState('');
    const [genres, setGenres] = useState('');
    const [overview, setOverview] = useState('');
    const [runtime, setRuntime] = useState(0);

    const handleAddTitle = useCallback(event => setTitle(event.target.value), []);
    const handleAddReleaseDate = useCallback(event => setReleaseDate(event.target.value), []);
    const handleAddUrl = useCallback(event => setUrl(event.target.value), []);
    const handleAddGenres = useCallback(event => setGenres(event.target.value), []);
    const handleAddOverview = useCallback(event => setOverview(event.target.value), []);
    const handleAddRuntime = useCallback(event => setRuntime(event.target.value), []);

    function confirmAdd(){
        let movie = new Movie(title, release_date, poster_path, genres.split(','), overview, Number.parseInt(runtime));
        props.dispatch(addMovie(movie));
        props.close();
    }

    return (
        <FormComponent>
            <Title>ADD MOVIE</Title>
            <FormOptionName>TITLE</FormOptionName>
            <FormOptionInput placeholder='Title here' onChange={handleAddTitle} />
            <FormOptionName>RELEASE DATE</FormOptionName>
            <FormOptionInput placeholder='Release date here' onChange={handleAddReleaseDate} />
            <FormOptionName>MOVIE URL</FormOptionName>
            <FormOptionInput placeholder='Movie URL here' onChange={handleAddUrl} />
            <FormOptionName>GENRES</FormOptionName>
            <FormOptionInput placeholder='Genres here' onChange={handleAddGenres} />
            <FormOptionName>OVERVIEW</FormOptionName>
            <FormOptionInput placeholder='Overview here' onChange={handleAddOverview} />
            <FormOptionName>RUNTIME</FormOptionName>
            <FormOptionInput placeholder='Runtime here' onChange={handleAddRuntime} />
            <ButtonContainer>
                <TransparentButton onClick={props.close}>RESET</TransparentButton>
                <ColoredButtonWrapper onClick={confirmAdd}>SUBMIT</ColoredButtonWrapper>
            </ButtonContainer>
        </FormComponent>
    )
}

export default connect()(AddMovieForm)