import styled from 'styled-components';
import PropTypes from 'prop-types';
import genresFromJson from '@assets/data/genres';
import { FormComponent, FormOptionName, FormOptionInput, FormOptionDropdown, ColoredButton, TransparentButton } from '@globalComponents'
import { VARIABLES } from '@styles/VARIABLES'
import { useState, useEffect } from 'react';

const TitleText = styled.div`
    color: white;
    font-size: 30px;
`

const OptionValue = styled.div`
    width: 100%;
    height: 40px;
    color: ${VARIABLES.lightgrey};
    display: flex;
    align-items: center;
`

const ButtonContainer = styled.div`
    margin-top: 40px;
    text-align: right;
    * {
        margin-left: 10px;
    }
`

function EditMovieForm(props) {  
    const [genres, setGenres] = useState([]);
    
    useEffect(() => {
        Promise
            .resolve(genresFromJson)
            .then(genres => setGenres(genres))
    }, [])
    
    return (
        <FormComponent>
            <TitleText>EDIT MOVIE</TitleText>
            <FormOptionName>MOVIE ID</FormOptionName>
            <OptionValue>{props.movie.id}</OptionValue>
            <FormOptionName>TITLE</FormOptionName>
            <FormOptionInput value={props.movie.name} />
            <FormOptionName>RELEASE DATE</FormOptionName>
            <FormOptionInput value={props.movie.age} />
            <FormOptionName>MOVIE URL</FormOptionName>
            <FormOptionInput value={props.movie.movieUrl} />
            <FormOptionName>GENRE</FormOptionName>
            <FormOptionDropdown defaultValue={props.movie.genre.toUpperCase()}>
                {
                    genres.map(genre => (
                            <option key={genre.id} value={genre.name}>
                                {genre.name}
                            </option>
                        )
                    )
                }
            </FormOptionDropdown>
            <FormOptionName>OVERVIEW</FormOptionName>
            <FormOptionInput value={props.movie.overview} />
            <FormOptionName>RUNTIME</FormOptionName>
            <FormOptionInput value={props.movie.runtime} />
            <ButtonContainer>
                <TransparentButton onClick={props.close}>RESET</TransparentButton>
                <ColoredButton>Save</ColoredButton>
            </ButtonContainer>
        </FormComponent>
    )
}


EditMovieForm.propTypes = {
    close: PropTypes.func.isRequired,
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        runtime: PropTypes.string.isRequired,
    })
}

export { EditMovieForm }