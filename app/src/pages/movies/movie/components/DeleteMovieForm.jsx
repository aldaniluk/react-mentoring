import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormComponent, ColoredButton, TransparentButton } from '@globalComponents'
import { deleteMovie } from '@store/actionCreators';
import { connect } from 'react-redux';

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
    function confirmDelete(){
        props.dispatch(deleteMovie(props.id));
    }

    return (
        <FormComponent onSubmit={confirmDelete}>
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
    id: PropTypes.number.isRequired,
    close: PropTypes.func.isRequired,
}

export default connect()(DeleteMovieForm)