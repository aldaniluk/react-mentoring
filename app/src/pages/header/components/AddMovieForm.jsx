import styled from 'styled-components';
import genresFromJson from '@assets/data/genres'
import { FormComponent, FormOptionName, FormOptionInput, FormOptionDropdown, ColoredButton, TransparentButton } from '@globalComponents'
import React from 'react'

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

class AddMovieForm extends React.Component {
    state = {
        genres: []
    }

    componentDidMount(){
        Promise.resolve(genresFromJson)
            .then(genres => this.setState({ genres }))
    }

    render() {
        return (
            <FormComponent>
                <Title>ADD MOVIE</Title>
                <FormOptionName>TITLE</FormOptionName>
                <FormOptionInput placeholder='Title here' />
                <FormOptionName>RELEASE DATE</FormOptionName>
                <FormOptionInput placeholder='Release date here' />
                <FormOptionName>MOVIE URL</FormOptionName>
                <FormOptionInput placeholder='Movie URL gere' />
                <FormOptionName>GENRE</FormOptionName>
                <FormOptionDropdown>
                    {
                        this.state.genres.map(genre => (
                                <option key={genre.id}>
                                    {genre.name}
                                </option>
                            )
                        )
                    }
                </FormOptionDropdown>
                <FormOptionName>OVERVIEW</FormOptionName>
                <FormOptionInput placeholder='Overview here' />
                <FormOptionName>RUNTIME</FormOptionName>
                <FormOptionInput placeholder='Runtime here' />
                <ButtonContainer>
                    <TransparentButton onClick={this.props.close}>RESET</TransparentButton>
                    <ColoredButtonWrapper>SUBMIT</ColoredButtonWrapper>
                </ButtonContainer>
            </FormComponent>
        )
    }
}

export { AddMovieForm }