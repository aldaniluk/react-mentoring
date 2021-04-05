import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormContainer, Form, ColoredButton, TransparentButton } from '@globalComponents'
import { store } from '@store/store';
import { deleteMovie } from '@store/actionCreators';

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
    function confirmDelete(event){
        event.preventDefault();
        store.dispatch(deleteMovie(props.id));
    }

    return (
        <FormContainer>
            <Form>
                <TitleText>DELETE MOVIE</TitleText>
                <Text>Are you sure you want to delete this movie?</Text>
                <ButtonContainer>
                    <TransparentButton onClick={props.close}>RESET</TransparentButton>
                    <ColoredButton onClick={confirmDelete}>Confirm</ColoredButton>
                </ButtonContainer>
            </Form>
        </FormContainer>
    )
}

DeleteMovieForm.propTypes = {
    id: PropTypes.number.isRequired,
    close: PropTypes.func.isRequired,
}

export { DeleteMovieForm }