import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import moviesFromJson from '@assets/data/movies';
import { MovieDetailsImg } from '@pages/header/movieDetails/components/MovieDetailsImg';
import { MovieDetailsComponent } from '@pages/header/movieDetails/components/layouts/MovieDetailsComponent';
import { MovieDetailsName } from '@pages/header/movieDetails/components/MovieDetailsName';
import { MovieDetailsText } from '@pages/header/movieDetails/components/MovieDetailsText';
import { MovieDetailsAccentText } from '@pages/header/movieDetails/components/MovieDetailsAccentText';
import { AgeTimeContainer } from '@pages/header/movieDetails/components/layouts/AgeTimeContainer';

function MovieDetails(props) {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        Promise
            .resolve(moviesFromJson)
            .then(movies => setMovie(movies.find(m => m.id === props.id)))
    }, [props.id])

    return (
        <MovieDetailsComponent>
            <MovieDetailsImg imgSrc={movie.imgSrc} />
            <div>
                <MovieDetailsName name={movie.name} rating={movie.rating} />
                {movie.isOscarWinning && <MovieDetailsText>Oscar winning Movie</MovieDetailsText>}
                <AgeTimeContainer>
                    <MovieDetailsAccentText>{movie.age}</MovieDetailsAccentText>
                    <MovieDetailsAccentText>{movie.duration} min</MovieDetailsAccentText>
                </AgeTimeContainer>
                <MovieDetailsText>{movie.description}</MovieDetailsText>
            </div>
        </MovieDetailsComponent>
    );
}

MovieDetails.propTypes = {
    id: PropTypes.number.isRequired
}

export { MovieDetails }