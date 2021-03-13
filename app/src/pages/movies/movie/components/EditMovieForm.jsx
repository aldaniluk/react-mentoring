import styled from 'styled-components';
import PropTypes from 'prop-types';
import genresFromJson from '@assets/data/genres';
import { FormComponent, FormOptionName, FormOptionInput, FormOptionDropdown, ColoredButton, TransparentButton } from '@globalComponents'
import { VARIABLES } from '@styles/VARIABLES'
import React from 'react';

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

class EditMovieForm extends React.Component {  
    state = {
        genres: []
    }

    componentDidMount(){
        Promise.resolve(genresFromJson)
            .then(genres => this.setState({ genres }))
    }
    
    render() {
        return (
            <FormComponent>
                <TitleText>EDIT MOVIE</TitleText>
                <FormOptionName>MOVIE ID</FormOptionName>
                <OptionValue>{this.props.movie.id}</OptionValue>
                <FormOptionName>TITLE</FormOptionName>
                <FormOptionInput value={this.props.movie.name} />
                <FormOptionName>RELEASE DATE</FormOptionName>
                <FormOptionInput value={this.props.movie.age} />
                <FormOptionName>MOVIE URL</FormOptionName>
                <FormOptionInput value={this.props.movie.movieUrl} />
                <FormOptionName>GENRE</FormOptionName>
                <FormOptionDropdown defaultValue={this.props.movie.genre.toUpperCase()}>
                    {
                        this.state.genres.map(genre => 
                                <option key={genre.id} value={genre.name}>
                                    {genre.name}
                                </option>
                            )
                    }
                </FormOptionDropdown>
                <FormOptionName>OVERVIEW</FormOptionName>
                <FormOptionInput value={this.props.movie.overview} />
                <FormOptionName>RUNTIME</FormOptionName>
                <FormOptionInput value={this.props.movie.runtime} />
                <ButtonContainer>
                    <TransparentButton onClick={this.props.close}>RESET</TransparentButton>
                    <ColoredButton>Save</ColoredButton>
                </ButtonContainer>
            </FormComponent>
        )
    }
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