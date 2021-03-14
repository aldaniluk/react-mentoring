import styled from 'styled-components';
import genresFromJson from '@assets/data/genres'
import { FormComponent, FormOptionName, FormOptionInput, FormOptionDropdown, ColoredButton, TransparentButton } from '@globalComponents'
import { useState, useEffect } from 'react'

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
    const [genres, setGenres] = useState([]);
    
    useEffect(() => {
        Promise
            .resolve(genresFromJson)
            .then(genres => setGenres(genres))
    }, [])

    return (
        <FormComponent>
            <Title>ADD MOVIE</Title>
            <FormOptionName>TITLE</FormOptionName>
            <FormOptionInput placeholder='Title here' />
            <FormOptionName>RELEASE DATE</FormOptionName>
            <FormOptionInput placeholder='Release date here' />
            <FormOptionName>MOVIE URL</FormOptionName>
            <FormOptionInput placeholder='Movie URL gere' />
            <FormOptionName>GENRE</FormOptionName>
            <FormOptionDropdown>
                {
                    genres.map(genre => (
                            <option key={genre.id}>
                                {genre.name}
                            </option>
                        )
                    )
                }
            </FormOptionDropdown>
            <FormOptionName>OVERVIEW</FormOptionName>
            <FormOptionInput placeholder='Overview here' />
            <FormOptionName>RUNTIME</FormOptionName>
            <FormOptionInput placeholder='Runtime here' />
            <ButtonContainer>
                <TransparentButton onClick={props.close}>RESET</TransparentButton>
                <ColoredButtonWrapper>SUBMIT</ColoredButtonWrapper>
            </ButtonContainer>
        </FormComponent>
    )
}

export { AddMovieForm }