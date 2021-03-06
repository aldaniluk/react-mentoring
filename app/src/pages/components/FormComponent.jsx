import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`

const Form = styled.div`
    width: 40%;
    background: ${VARIABLES.darkgrey};
    padding: 40px;
`

function FormComponent(props) {
    return (
        <Container>
            <Form>
                {props.children}
            </Form>
        </Container>
    )
}

export { FormComponent }