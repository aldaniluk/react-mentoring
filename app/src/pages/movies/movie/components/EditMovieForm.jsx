import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormComponent, FormOptionName, FormOptionInput, ColoredButton, TransparentButton, ValidationFormText } from '@globalComponents'
import { VARIABLES } from '@styles/VARIABLES'
import { updateMovie } from '@store/actionCreators';
import { useFormik } from 'formik';
import { formValidator } from '@services/formValidator';
import { Movie } from '@models';
import { connect } from 'react-redux';
import FilterOptions from '@assets/data/FilterOptions';

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
    const validate = values => formValidator(values, FilterOptions);

    const formik = useFormik({
        initialValues: {
            title: props.movie.title,
            release_date: props.movie.release_date,
            poster_path: props.movie.poster_path,
            genres: props.movie.genres.join(','),
            overview: props.movie.overview,
            runtime: props.movie.runtime.toString()
        },
        validate,
        onSubmit: values => {
            let movie = new Movie(values.title, values.release_date, values.poster_path, values.genres.split(','), values.overview, Number.parseInt(values.runtime));
            movie.id = props.movie.id;

            props.dispatch(updateMovie(movie));
            props.close();
        }
    });
    
    return (
        <FormComponent onSubmit={formik.handleSubmit}>
            <TitleText>EDIT MOVIE</TitleText>
            <FormOptionName>MOVIE ID</FormOptionName>
            <OptionValue>{props.movie.id}</OptionValue>
            <FormOptionName>TITLE</FormOptionName>
            <FormOptionInput 
                id='title'
                name='title'
                placeholder='Title here' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title} 
            />
            {formik.touched.title && formik.errors.title ? <ValidationFormText>{formik.errors.title}</ValidationFormText> : null}
            <FormOptionName>RELEASE DATE</FormOptionName>
            <FormOptionInput 
                id='release_date'
                name='release_date'
                placeholder='Release date here' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.release_date} 
            />
            {formik.touched.release_date && formik.errors.release_date ? <ValidationFormText>{formik.errors.release_date}</ValidationFormText> : null}
            <FormOptionName>MOVIE URL</FormOptionName>
            <FormOptionInput 
                id='poster_path'
                name='poster_path'
                placeholder='Url here' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.poster_path} 
            />
            {formik.touched.poster_path && formik.errors.poster_path ? <ValidationFormText>{formik.errors.poster_path}</ValidationFormText> : null}
            <FormOptionName>GENRE</FormOptionName>
            <FormOptionInput 
                id='genres'
                name='genres'
                placeholder='Genres here' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.genres} 
            />
            {formik.touched.genres && formik.errors.genres ? <ValidationFormText>{formik.errors.genres}</ValidationFormText> : null}
            <FormOptionName>OVERVIEW</FormOptionName>
            <FormOptionInput 
                id='overview'
                name='overview'
                placeholder='Overview here' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.overview} 
            />
            {formik.touched.overview && formik.errors.overview ? <ValidationFormText>{formik.errors.overview}</ValidationFormText> : null}
            <FormOptionName>RUNTIME</FormOptionName>
            <FormOptionInput 
                id='runtime'
                name='runtime'
                placeholder='Runtime here' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.runtime} 
            />
            {formik.touched.runtime && formik.errors.runtime ? <ValidationFormText>{formik.errors.runtime}</ValidationFormText> : null}
            <ButtonContainer>
                <TransparentButton onClick={props.close}>RESET</TransparentButton>
                <ColoredButton type='submit'>Save</ColoredButton>
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

export default connect()(EditMovieForm)