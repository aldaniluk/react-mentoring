import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`

const Name = styled.div`
    font-size: 45px;
    padding-right: 15px;
`

const Rating = styled.div`
    font-size: 30px;
    padding: 10px;
    border: 1px solid white;
    border-radius: 100%;
`

function MovieDetailsName(props){
    return (
        <Container>
            <Name>{props.name}</Name>
            <Rating>{props.rating}</Rating>
        </Container>
    )
}

export { MovieDetailsName }