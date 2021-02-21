import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    color: white;
`

function FilterListComponent(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export { FilterListComponent }