import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 50px;
    column-gap: 50px;
    padding: 20px 0; 
`

function MoviesListComponent(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export { MoviesListComponent }