import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 4px;
    color: #f65261;
    background: rgba(255, 255, 255, 0.2);     
    padding: 10px 15px;
`

const BoldText = styled.span`
    font-weight: bold;
`

function AddMovieButton(props){
    return (
        <Button onClick={props.openAddMovieForm}>
            <BoldText>+ ADD MOVIE</BoldText>
        </Button>
    );
}

export { AddMovieButton }