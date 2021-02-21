import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 3px solid #808080;
`

function FilterSorterTopPanelComponent(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export { FilterSorterTopPanelComponent }