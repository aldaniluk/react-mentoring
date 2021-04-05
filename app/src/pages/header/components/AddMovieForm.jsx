import styled from 'styled-components';
import { FormContainer, Form, FormOptionName, FormOptionInput, ColoredButton, TransparentButton, ValidationFormText } from '@globalComponents'
import { store } from '@store/store';
import { addMovie } from '@store/actionCreators';
import React from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { formValidator } from '@services/formValidator';

const Title = styled.div`
    color: white;
    font-size: 30px;
`

const ButtonContainer = styled.div`
    margin-top: 40px;
    text-align: right;
`

const ColoredButtonWrapper = styled(ColoredButton)`
    margin-left: 10px;
`

function AddMovieForm(props) {
    const genres = useSelector(state => state.filter.options);
    const validate = values => formValidator(values, genres);

    const formik = useFormik({
        initialValues: {
            title: '',
            releaseDate: '',
            url: '',
            genres: '',
            overview: '',
            runtime: ''
        },
        validate,
        onSubmit: values => {
            var movie = {
                title: values.title,
                release_date: values.releaseDate,
                poster_path: values.url,
                genres: values.genres.split(','),
                overview: values.overview,
                runtime: Number.parseInt(values.runtime)
            }

            store.dispatch(addMovie(movie));
            props.close();
        }
    });

    return (
        <FormContainer>
            <Form onSubmit={formik.handleSubmit}>
                <Title>ADD MOVIE</Title>
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
                <FormOptionName>GENRES</FormOptionName>
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
                    <ColoredButtonWrapper type='submit'>SUBMIT</ColoredButtonWrapper>
                </ButtonContainer>
            </Form>
        </FormContainer>
    )
}

export { AddMovieForm }