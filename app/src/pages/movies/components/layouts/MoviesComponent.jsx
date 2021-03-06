import { GlobalWidthComponent } from '@globalComponents';
import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const Container = styled.div`
    background: ${VARIABLES.darkgrey};
    padding: 20px 0;
`

function MoviesComponent(props) {
    return (
        <Container>
            <GlobalWidthComponent>
                {props.children}
            </GlobalWidthComponent>
        </Container>
    )
}

export { MoviesComponent }