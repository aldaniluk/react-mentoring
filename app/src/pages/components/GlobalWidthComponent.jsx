import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`

function GlobalWidthComponent(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export { GlobalWidthComponent }