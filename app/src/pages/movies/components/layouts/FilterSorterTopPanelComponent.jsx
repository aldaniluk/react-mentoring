import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 3px solid ${VARIABLES.lightgrey};
`

function FilterSorterTopPanelComponent(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export { FilterSorterTopPanelComponent }