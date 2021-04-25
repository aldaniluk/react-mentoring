import { connect } from 'react-redux';
import { AddMovieForm } from './AddMovieForm';
import { addMovie } from '@store/actionCreators';

let mapDispatchToProps = (dispatch) => {
    return {
        addMovie: movie => dispatch(addMovie(movie)),
    }
}

export default connect(null, mapDispatchToProps)(AddMovieForm)