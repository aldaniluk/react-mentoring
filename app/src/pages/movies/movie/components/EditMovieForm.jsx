import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormComponent, FormOptionName, FormOptionInput, FormOptionDropdown, ColoredButton, TransparentButton } from '@globalComponents'
import { VARIABLES } from '@styles/VARIABLES'
import { useState, useEffect } from 'react'
import { store } from '@store/store';
import { updateMovie } from '@store/actionCreators';

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

    function confirmUpdate(event){
        event.preventDefault();
        var movie = {
            ...props.movie,
            title: title,
            release_date: release_date,
            poster_path: poster_path,
            genres: genres.split(','),
            overview: overview,
            runtime: Number.parseInt(runtime)
        }

        store.dispatch(updateMovie(movie));
        props.close();
    }
    
    return (
        <FormComponent>
            <TitleText>EDIT MOVIE</TitleText>
            <FormOptionName>MOVIE ID</FormOptionName>
            <OptionValue>{props.movie.id}</OptionValue>
            <FormOptionName>TITLE</FormOptionName>
            <FormOptionInput defaultValue={title} onChange={event => setTitle(event.target.value)} />
            <FormOptionName>RELEASE DATE</FormOptionName>
            <FormOptionInput defaultValue={release_date} onChange={event => setReleaseDate(event.target.value)} />
            <FormOptionName>MOVIE URL</FormOptionName>
            <FormOptionInput defaultValue={poster_path} onChange={event => setUrl(event.target.value)} />
            <FormOptionName>GENRE</FormOptionName>
            <FormOptionInput defaultValue={genres} onChange={event => setGenres(event.target.value)} />
            {/* Let's forget about dropdown for a while
             <FormOptionDropdown defaultValue={props.movie.genres.join()}>
                {
                    genres.map(genre => (
                            <option key={genre.id} value={genre.name}>
                                {genre.name}
                            </option>
                        )
                    )
                }
            </FormOptionDropdown> */}
            <FormOptionName>OVERVIEW</FormOptionName>
            <FormOptionInput defaultValue={overview} onChange={event => setOverview(event.target.value)} />
            <FormOptionName>RUNTIME</FormOptionName>
            <FormOptionInput defaultValue={runtime} onChange={event => setRuntime(event.target.value)} />
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

export { EditMovieForm }