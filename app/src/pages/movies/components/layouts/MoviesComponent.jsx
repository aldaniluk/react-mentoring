import { GlobalWidthComponent } from '@globalComponents/GlobalWidthComponent';
import styled from 'styled-components';

const Container = styled.div`
    background: #232323;
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