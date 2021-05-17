import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { MovieDetailsImg } from '@pages/header/movieDetails/components/MovieDetailsImg';
import { MovieDetailsComponent } from '@pages/header/movieDetails/components/layouts/MovieDetailsComponent';
import { MovieDetailsName } from '@pages/header/movieDetails/components/MovieDetailsName';
import { MovieDetailsText } from '@pages/header/movieDetails/components/MovieDetailsText';
import { MovieDetailsAccentText } from '@pages/header/movieDetails/components/MovieDetailsAccentText';
import { AgeTimeContainer } from '@pages/header/movieDetails/components/layouts/AgeTimeContainer';
import { useSelector, connect } from 'react-redux';
import { movieSelector } from '@store/selectors';
import { getMovie } from '@store/actionCreators';

function MovieDetails(props) {
    let movie = useSelector(movieSelector);
    let id = parseInt(props.id);

    useEffect(() => {
        props.getMovie(id);
    }, [id])

    return (
        <MovieDetailsComponent>
            <MovieDetailsImg poster_path={movie.poster_path} />
            <div>
                <MovieDetailsName title={movie.title} vote_average={movie.vote_average} />
                <AgeTimeContainer>
                    <MovieDetailsAccentText>{movie.release_date}</MovieDetailsAccentText>
                    <MovieDetailsAccentText>{movie.runtime} min</MovieDetailsAccentText>
                </AgeTimeContainer>
                <MovieDetailsText>{movie.overview}</MovieDetailsText>
            </div>
        </MovieDetailsComponent>
    );
}

MovieDetails.propTypes = {
    id: PropTypes.string.isRequired
}

export default connect(null, { getMovie })(MovieDetails)