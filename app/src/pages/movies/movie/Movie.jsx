import PropTypes from 'prop-types';
import React from 'react';
import { EditMovieForm } from './components/EditMovieForm'
import { DeleteMovieForm } from './components/DeleteMovieForm'
import { MovieDescription } from './components/MovieDescription'
import { MovieComponent } from './components/layouts/MovieComponent'
import { EditDeleteOptions } from './components/EditDeleteOptions'

class Movie extends React.Component {
    state = {
        editDeleteShown: false,
        editMovieFormOpened: false,
        deleteMovieFormOpened: false
    }

    showEditDelete = () => {
        this.setState({
            editDeleteShown: true
        });
    }

    hideEditDelete = () => {
        this.setState({
            editDeleteShown: false
        });
    }

    openEditMovieForm = () => {
        this.setState({
            editMovieFormOpened: true
        });
    }

    closeEditMovieForm = () => {
        this.setState({
            editMovieFormOpened: false
        });
    }

    openDeleteMovieForm = () => {
        this.setState({
            deleteMovieFormOpened: true
        });
    }

    closeDeleteMovieForm = () => {
        this.setState({
            deleteMovieFormOpened: false
        });
    }

    render() {
        return (
            <>
                {this.state.editMovieFormOpened && (<EditMovieForm close={this.closeEditMovieForm} movie={this.props.movie}/>)}
                {this.state.deleteMovieFormOpened &&  (<DeleteMovieForm close={this.closeDeleteMovieForm} />)}
                <MovieComponent 
                    onMouseOver={this.showEditDelete} 
                    onMouseLeave={this.hideEditDelete}
                    onClick={() => this.props.showMovieDetails(this.props.movie.id)}
                >
                    <img src={'imgs/'+this.props.movie.imgSrc} />
                    <EditDeleteOptions 
                        show={this.state.editDeleteShown}
                        openEditMovie={this.openEditMovieForm}
                        openDeleteMovie={this.openDeleteMovieForm}
                    />
                    <MovieDescription 
                        name={this.props.movie.name} 
                        age={this.props.movie.age} 
                        genre={this.props.movie.genre} 
                    />
                </MovieComponent>
            </>
        );
    }
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