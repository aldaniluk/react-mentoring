import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormComponent, FormOptionName, FormOptionInput, ColoredButton, TransparentButton } from '@globalComponents'
import { VARIABLES } from '@styles/VARIABLES'
import { useState, useCallback } from 'react'
import { updateMovie } from '@store/actionCreators';
import { Movie } from '@models';
import { connect } from 'react-redux';

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
    const [title, setTitle] = useState(props.movie.title);
    const [release_date, setReleaseDate] = useState(props.movie.release_date);
    const [poster_path, setUrl] = useState(props.movie.poster_path);
    const [genres, setGenres] = useState(props.movie.genres.join(','));
    const [overview, setOverview] = useState(props.movie.overview);
    const [runtime, setRuntime] = useState(props.movie.runtime);

    const handleEditTitle = useCallback(event => setTitle(event.target.value), []);
    const handleEditReleaseDate = useCallback(event => setReleaseDate(event.target.value), []);
    const handleEditUrl = useCallback(event => setUrl(event.target.value), []);
    const handleEditGenres = useCallback(event => setGenres(event.target.value), []);
    const handleEditOverview = useCallback(event => setOverview(event.target.value), []);
    const handleEditRuntime = useCallback(event => setRuntime(event.target.value), []);

    function confirmUpdate(){
        let movie = new Movie(title, release_date, poster_path, genres.split(','), overview, Number.parseInt(runtime));
        movie.id = props.movie.id;

        props.dispatch(updateMovie(movie));
        props.close();
    }
    
    return (
        <FormComponent>
            <TitleText>EDIT MOVIE</TitleText>
            <FormOptionName>MOVIE ID</FormOptionName>
            <OptionValue>{props.movie.id}</OptionValue>
            <FormOptionName>TITLE</FormOptionName>
            <FormOptionInput defaultValue={title} onChange={handleEditTitle} />
            <FormOptionName>RELEASE DATE</FormOptionName>
            <FormOptionInput defaultValue={release_date} onChange={handleEditReleaseDate} />
            <FormOptionName>MOVIE URL</FormOptionName>
            <FormOptionInput defaultValue={poster_path} onChange={handleEditUrl} />
            <FormOptionName>GENRE</FormOptionName>
            <FormOptionInput defaultValue={genres} onChange={handleEditGenres} />
            <FormOptionName>OVERVIEW</FormOptionName>
            <FormOptionInput defaultValue={overview} onChange={handleEditOverview} />
            <FormOptionName>RUNTIME</FormOptionName>
            <FormOptionInput defaultValue={runtime} onChange={handleEditRuntime} />
            <ButtonContainer>
                <TransparentButton onClick={props.close}>RESET</TransparentButton>
                <ColoredButton onClick={confirmUpdate}>Save</ColoredButton>
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

export default connect()(EditMovieForm)