import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

function FilterSorterTopPanelComponent(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export { FilterSorterTopPanelComponent }