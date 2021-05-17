import { connect } from 'react-redux';
import { AddMovieForm } from './AddMovieForm';
import { addMovie } from '@store/actionCreators';

export default connect(null, { addMovie })(AddMovieForm)