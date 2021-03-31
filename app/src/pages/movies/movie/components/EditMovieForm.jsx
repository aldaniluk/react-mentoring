import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormComponent, FormOptionName, FormOptionInput, FormOptionDropdown, ColoredButton, TransparentButton } from '@globalComponents'
import { VARIABLES } from '@styles/VARIABLES'
import { useSelector } from 'react-redux';

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
    const genres = useSelector(state => state.filter.options);
    
    return (
        <FormComponent>
            <TitleText>EDIT MOVIE</TitleText>
            <FormOptionName>MOVIE ID</FormOptionName>
            <OptionValue>{props.movie.id}</OptionValue>
            <FormOptionName>TITLE</FormOptionName>
            <FormOptionInput value={props.movie.title} />
            <FormOptionName>RELEASE DATE</FormOptionName>
            <FormOptionInput value={props.movie.release_date} />
            <FormOptionName>MOVIE URL</FormOptionName>
            <FormOptionInput value={props.movie.poster_path} />
            <FormOptionName>GENRE</FormOptionName>
            <FormOptionDropdown defaultValue={props.movie.genres.join()}>
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
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        poster_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        runtime: PropTypes.number.isRequired,
    })
}

export { EditMovieForm }