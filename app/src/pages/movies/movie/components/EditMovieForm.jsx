import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormContainer, Form, FormOptionName, FormOptionInput, FormOptionDropdown, ColoredButton, TransparentButton, ValidationFormText } from '@globalComponents'
import { VARIABLES } from '@styles/VARIABLES'
import { store } from '@store/store';
import { updateMovie } from '@store/actionCreators';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { formValidator } from '@services/formValidator';

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
    const genres = useSelector(state => state.filter.options);
    const validate = values => formValidator(values, genres);

    const formik = useFormik({
        initialValues: {
            title: props.movie.title,
            releaseDate: props.movie.release_date,
            url: props.movie.poster_path,
            genres: props.movie.genres.join(','),
            overview: props.movie.overview,
            runtime: props.movie.runtime.toString()
        },
        validate,
        onSubmit: values => {
            var movie = {
                ...props.movie,
                title: values.title,
                release_date: values.releaseDate,
                poster_path: values.url,
                genres: values.genres.split(','),
                overview: values.overview,
                runtime: Number.parseInt(values.runtime)
            }

            store.dispatch(updateMovie(movie));
            props.close();
        }
    });
    
    return (
        <FormContainer>
            <Form onSubmit={formik.handleSubmit}>
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
                    id='releaseDate'
                    name='releaseDate'
                    placeholder='Release date here' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.releaseDate} 
                />
                {formik.touched.releaseDate && formik.errors.releaseDate ? <ValidationFormText>{formik.errors.releaseDate}</ValidationFormText> : null}
                <FormOptionName>MOVIE URL</FormOptionName>
                <FormOptionInput 
                    id='url'
                    name='url'
                    placeholder='Url here' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.url} 
                />
                {formik.touched.url && formik.errors.url ? <ValidationFormText>{formik.errors.url}</ValidationFormText> : null}
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
            </Form>
        </FormContainer>
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

export { EditMovieForm }