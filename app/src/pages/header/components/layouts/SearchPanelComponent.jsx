import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 100px 60px;
`

function SearchPanelComponent(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export { SearchPanelComponent }