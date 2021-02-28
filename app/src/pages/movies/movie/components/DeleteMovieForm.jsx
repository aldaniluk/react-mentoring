import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormComponent } from '@globalComponents/FormComponent'

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
    display: flex;
    justify-content: flex-end;
`

const ResetButton = styled.button`
    border: 2px solid #f65261;
    border-radius: 5px;
    color: #f65261;
    background: none; 
    width: 150px;
    height: 40px;
`

const ComfirmButton = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    background: #f65261; 
    width: 150px;
    height: 40px;
    margin-left: 10px;
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
                <ResetButton onClick={props.close}>RESET</ResetButton>
                <ComfirmButton>Confirm</ComfirmButton>
            </ButtonContainer>
        </FormComponent>
    )
}

DeleteMovieForm.propTypes = {
    opened: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
}

export { DeleteMovieForm }