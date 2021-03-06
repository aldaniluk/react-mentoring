import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const Text = styled.p`
    color: ${VARIABLES.lightgrey};
`

function SortByText() {
    return (
        <Text>
            SORT BY
        </Text>
    );
}

export { SortByText }