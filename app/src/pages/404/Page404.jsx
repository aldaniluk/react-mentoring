import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'
import { TransparentButton } from '@globalComponents';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    background-color: ${VARIABLES.darkgrey};
    text-align: center;
    padding: 350px 0;
`

const Text = styled.p`
    color: ${VARIABLES.red};
    font-size: 40px;
    padding: 50px;
`

function Page404() {
    return (
        <Container>
            <Text>
                Page not found.
            </Text>
            <NavLink to='/'>
                <TransparentButton>
                    GO BACK HOME
                </TransparentButton>
            </NavLink>
        </Container>
    )
}

export { Page404 }