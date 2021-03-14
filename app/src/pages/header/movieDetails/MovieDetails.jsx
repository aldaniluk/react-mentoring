import PropTypes from 'prop-types';
import React from 'react';
import moviesFromJson from '@assets/data/movies';
import { MovieDetailsImg } from '@pages/header/movieDetails/components/MovieDetailsImg';
import { MovieDetailsComponent } from '@pages/header/movieDetails/components/layouts/MovieDetailsComponent';
import { MovieDetailsName } from '@pages/header/movieDetails/components/MovieDetailsName';
import { MovieDetailsText } from '@pages/header/movieDetails/components/MovieDetailsText';
import { MovieDetailsAccentText } from '@pages/header/movieDetails/components/MovieDetailsAccentText';
import { AgeTimeContainer } from '@pages/header/movieDetails/components/layouts/AgeTimeContainer';

class MovieDetails extends React.Component {
    state = {
        movie: {}
    }

    componentDidMount(){
        this.updateMovieState(this.props.id);
    }

    componentDidUpdate(prevProps){
        if(prevProps.id !== this.props.id){
            this.updateMovieState(this.props.id);
        }
    }

    updateMovieState = id => {
        Promise.resolve(moviesFromJson)
            .then(movies => this.setState({ movie: movies.find(m => m.id === id) }))
    }

    render() {
        return (
            <MovieDetailsComponent>
                <MovieDetailsImg imgSrc={this.state.movie.imgSrc} />
                <div>
                    <MovieDetailsName name={this.state.movie.name} rating={this.state.movie.rating} />
                    {this.state.movie.isOscarWinning && <MovieDetailsText>Oscar winning Movie</MovieDetailsText>}
                    <AgeTimeContainer>
                        <MovieDetailsAccentText>{this.state.movie.age}</MovieDetailsAccentText>
                        <MovieDetailsAccentText>{this.state.movie.duration} min</MovieDetailsAccentText>
                    </AgeTimeContainer>
                    <MovieDetailsText>{this.state.movie.description}</MovieDetailsText>
                </div>

            </MovieDetailsComponent>
        );
    }
}

MovieDetails.propTypes = {
    id: PropTypes.number.isRequired
}

export { MovieDetails }