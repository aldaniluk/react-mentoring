import styled from 'styled-components';
import { FormComponent, FormOptionName, FormOptionInput, ColoredButton, TransparentButton, ValidationFormText } from '@globalComponents'
import React from 'react';
import { useFormik } from 'formik';
import { formValidator } from '@services/formValidator';
import { Movie } from '@models';
import FilterOptions from '@assets/data/FilterOptions';

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
    const validate = values => formValidator(values, FilterOptions);

    const formik = useFormik({
        initialValues: {
            title: '',
            release_date: '',
            poster_path: '',
            genres: '',
            overview: '',
            runtime: ''
        },
        validate,
        onSubmit: values => {
            let movie = new Movie(values.title, values.release_date, values.poster_path, values.genres.split(','), values.overview, Number.parseInt(values.runtime));

            props.addMovie(movie);
            props.close();
        }
    });

    return (
        <FormComponent onSubmit={formik.handleSubmit}>
            <Title>ADD MOVIE</Title>
            <FormOptionName>TITLE</FormOptionName>
            <FormOptionInput 
                id='title'
                name='title'
                title='title'
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
                title='release_date'
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
                title='poster_path'
                placeholder='Url here' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.poster_path} 
            />
            {formik.touched.poster_path && formik.errors.poster_path ? <ValidationFormText>{formik.errors.poster_path}</ValidationFormText> : null}
            <FormOptionName>GENRES</FormOptionName>
            <FormOptionInput 
                id='genres'
                name='genres'
                title='genres'
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
                title='overview'
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
                title='runtime'
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
        </FormComponent>
    )
}

export { AddMovieForm }