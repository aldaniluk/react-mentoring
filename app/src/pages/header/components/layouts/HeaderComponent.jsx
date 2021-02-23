import { GlobalWidthComponent } from '@globalComponents/GlobalWidthComponent';
import styled from 'styled-components';
import img from '../../../../assets/movies.png';

const Container = styled.div`
    padding: 30px 0px;
    background: black;
    background-image:linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img});
    background-size: cover;
    background-position: center center;
`

function HeaderComponent(props) {
    return (
        <Container>
            <GlobalWidthComponent>
                {props.children}
            </GlobalWidthComponent>
        </Container>
    )
}

export { HeaderComponent }