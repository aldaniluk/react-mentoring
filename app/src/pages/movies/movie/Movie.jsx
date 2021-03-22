import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { EditMovieForm } from '@pages/movies/movie/components/EditMovieForm';
import { DeleteMovieForm } from '@pages/movies/movie/components/DeleteMovieForm';
import { MovieDescription } from '@pages/movies/movie/components/MovieDescription';
import { MovieComponent } from '@pages/movies/movie/components/layouts/MovieComponent';
import { EditDeleteOptions } from '@pages/movies/movie/components/EditDeleteOptions';

function Movie(props) {
    const [editDeleteShown, setEditDeleteShown] = useState(false);
    const [editMovieFormOpened, setEditMovieFormOpened] = useState(false);
    const [deleteMovieFormOpened, setDeleteMovieFormOpened] = useState(false);

    const handleEditMovieForm = useCallback(() => setEditMovieFormOpened(flag => !flag), []);
    const handleDeleteMovieForm = useCallback(() => setDeleteMovieFormOpened(flag => !flag), []);
    const showEditDelete = useCallback(() => setEditDeleteShown(true), []);
    const hideEditDelete = useCallback(() => setEditDeleteShown(false), []);

    const showMovieDetails = useCallback(() => props.showMovieDetails(props.movie.id), [props.showMovieDetails, props.movie.id]);

    return (
        <>
            {editMovieFormOpened && (<EditMovieForm close={handleEditMovieForm} movie={props.movie}/>)}
            {deleteMovieFormOpened &&  (<DeleteMovieForm close={handleDeleteMovieForm} />)}
            <MovieComponent 
                onMouseOver={showEditDelete} 
                onMouseLeave={hideEditDelete}
                onClick={showMovieDetails}
            >
                <img src={'imgs/'+props.movie.imgSrc} />
                {editDeleteShown && (<EditDeleteOptions 
                    openEditMovie={handleEditMovieForm}
                    openDeleteMovie={handleDeleteMovieForm}
                />)}
                <MovieDescription 
                    name={props.movie.name} 
                    age={props.movie.age} 
                    genre={props.movie.genre} 
                />
            </MovieComponent>
        </>
    );
}

Movie.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        runtime: PropTypes.string.isRequired,
    }).isRequired
}

export { Movie }