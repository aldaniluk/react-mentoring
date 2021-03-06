import styled from 'styled-components';
import { Logo } from '@globalComponents';
import { VARIABLES } from '@styles/VARIABLES'

const Container = styled.div`
    background-color: ${VARIABLES.grey};
    text-align: center;
    padding: 20px 0px;
`

function Footer() {
    return (
        <Container>
            <Logo />
        </Container>
    )
}

export { Footer }