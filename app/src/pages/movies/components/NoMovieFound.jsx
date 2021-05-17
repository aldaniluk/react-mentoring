import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const Container = styled.div`
    text-align: center;
    padding: 120px 0;
`

const Text = styled.p`
    color: ${VARIABLES.red};
    font-size: 40px;
    padding: 50px;
`

function NoMovieFound() {
    return (
        <Container>
            <Text>
                No movie found.
            </Text>
        </Container>
    )
}

export { NoMovieFound }