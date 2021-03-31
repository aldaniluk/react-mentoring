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
                <img src={props.movie.poster_path} />
                {editDeleteShown && (<EditDeleteOptions 
                    openEditMovie={handleEditMovieForm}
                    openDeleteMovie={handleDeleteMovieForm}
                />)}
                <MovieDescription 
                    title={props.movie.title} 
                    release_date={props.movie.release_date} 
                    genres={props.movie.genres} 
                />
            </MovieComponent>
        </>
    );
}

Movie.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired
}

export { Movie }