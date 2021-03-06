import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormComponent, ColoredButton, TransparentButton } from '@globalComponents'
import { VARIABLES } from '@styles/VARIABLES'

const TitleText = styled.div`
    color: white;
    font-size: 30px;
`

const Text = styled.div`
    margin-top: 20px;
    color: white;
`

const ButtonContainer = styled.div`
    margin-top: 40px;
    text-align: right;
    * {
        margin-left: 10px;
    }
`

function DeleteMovieForm(props) {    
    if(!props.opened){
        return null;
    }
     
    return (
        <FormComponent>
            <TitleText>DELETE MOVIE</TitleText>
            <Text>Are you sure you want to delete this movie?</Text>
            <ButtonContainer>
                <TransparentButton onClick={props.close}>RESET</TransparentButton>
                <ColoredButton>Confirm</ColoredButton>
            </ButtonContainer>
        </FormComponent>
    )
}

DeleteMovieForm.propTypes = {
    opened: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
}

export { DeleteMovieForm }