import styled from 'styled-components';
import PropTypes from 'prop-types';
import genres from '@assets/data/genres';
import { FormComponent } from '@globalComponents/FormComponent';

const TitleText = styled.div`
    color: white;
    font-size: 30px;
`

const OptionName = styled.div`
    margin-top: 20px;
    color: #f65261;
`

const OptionValue = styled.div`
    width: 100%;
    height: 40px;
    color: #5b5b5b;
    display: flex;
    align-items: center;
`

const OptionInput = styled.input`
    width: 100%;
    background: #2e2e2e;
    border: none;
    border-radius: 5px;
    height: 40px;
    color: #5b5b5b;
`

const OptionDropdown = styled.select`
    width: 100%;
    height: 40px;
    background: #2e2e2e;
    height: 40px;
    border: none;
    border-radius: 5px;
    color: #5b5b5b;
`

const OptionDropdownItem = styled.option`
`

const ButtonContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
`

const ResetButton = styled.button`
    border: 2px solid #f65261;
    border-radius: 5px;
    color: #f65261;
    background: none; 
    width: 150px;
    height: 40px;
`

const SubmitButton = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    background: #f65261; 
    width: 150px;
    height: 40px;
    margin-left: 10px;
`

function EditMovieForm(props) {    
    if(!props.opened){
        return null;
    }
    
    return (
        <FormComponent>
            <TitleText>EDIT MOVIE</TitleText>
            <OptionName>MOVIE ID</OptionName>
            <OptionValue>{props.movie.id}</OptionValue>
            <OptionName>TITLE</OptionName>
            <OptionInput value={props.movie.name} />
            <OptionName>RELEASE DATE</OptionName>
            <OptionInput value={props.movie.age} />
            <OptionName>MOVIE URL</OptionName>
            <OptionInput value={props.movie.movieUrl} />
            <OptionName>GENRE</OptionName>
            <OptionDropdown defaultValue={props.movie.genre.toUpperCase()}>
                {
                    genres.map(genre => 
                            <OptionDropdownItem key={genre.id} value={genre.name}>
                                {genre.name}
                            </OptionDropdownItem>
                        )
                }
            </OptionDropdown>
            <OptionName>OVERVIEW</OptionName>
            <OptionInput value={props.movie.overview} />
            <OptionName>RUNTIME</OptionName>
            <OptionInput value={props.movie.runtime} />
            <ButtonContainer>
                <ResetButton onClick={props.close}>RESET</ResetButton>
                <SubmitButton>Save</SubmitButton>
            </ButtonContainer>
        </FormComponent>
    )
}


EditMovieForm.propTypes = {
    opened: PropTypes.bool.isRequired,
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