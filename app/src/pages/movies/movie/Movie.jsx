import PropTypes from 'prop-types';
import { useState } from 'react';
import { EditMovieForm } from '@pages/movies/movie/components/EditMovieForm';
import { DeleteMovieForm } from '@pages/movies/movie/components/DeleteMovieForm';
import { MovieDescription } from '@pages/movies/movie/components/MovieDescription';
import { MovieComponent } from '@pages/movies/movie/components/layouts/MovieComponent';
import { EditDeleteOptions } from '@pages/movies/movie/components/EditDeleteOptions';

function Movie(props) {
    const [editDeleteShown, setEditDeleteShown] = useState(false);
    const [editMovieFormOpened, setEditMovieFormOpened] = useState(false);
    const [deleteMovieFormOpened, setDeleteMovieFormOpened] = useState(false);

    return (
        <>
            {editMovieFormOpened && (<EditMovieForm close={() => setEditMovieFormOpened(false)} movie={props.movie}/>)}
            {deleteMovieFormOpened &&  (<DeleteMovieForm close={() => setDeleteMovieFormOpened(false)} />)}
            <MovieComponent 
                onMouseOver={() => setEditDeleteShown(true)} 
                onMouseLeave={() => setEditDeleteShown(false)}
                onClick={() => props.showMovieDetails(props.movie.id)}
            >
                <img src={'imgs/'+props.movie.imgSrc} />
                {editDeleteShown && (<EditDeleteOptions 
                    openEditMovie={() => setEditMovieFormOpened(true)}
                    openDeleteMovie={() => setDeleteMovieFormOpened(true)}
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