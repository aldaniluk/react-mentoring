import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
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