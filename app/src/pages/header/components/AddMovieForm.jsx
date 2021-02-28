import styled from 'styled-components';
import genres from '@assets/data/genres'
import { FormComponent, FormOptionName, FormOptionInput, FormOptionDropdown, ColoredButton, TransparentButton } from '@globalComponents'

const Title = styled.div`
    color: white;
    font-size: 30px;
`

const OptionDropdownItem = styled.option`
`

const ButtonContainer = styled.div`
    margin-top: 40px;
    text-align: right;
    * {
        margin-left: 10px;
    }
`

function AddMovieForm(props) {
    if(!props.opened){
        return null;
    }

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
                    genres.map(genre => 
                            <OptionDropdownItem key={genre.id}>
                                {genre.name}
                            </OptionDropdownItem>
                        )
                }
            </FormOptionDropdown>
            <FormOptionName>OVERVIEW</FormOptionName>
            <FormOptionInput placeholder='Overview here' />
            <FormOptionName>RUNTIME</FormOptionName>
            <FormOptionInput placeholder='Runtime here' />
            <ButtonContainer>
                <TransparentButton onClick={props.close}>RESET</TransparentButton>
                <ColoredButton>SUBMIT</ColoredButton>
            </ButtonContainer>
        </FormComponent>
    )
}

export { AddMovieForm }