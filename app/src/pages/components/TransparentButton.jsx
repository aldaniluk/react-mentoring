import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const Button = styled.button`
    border: 2px solid ${VARIABLES.red};
    border-radius: 5px;
    color: ${VARIABLES.red};
    background: none; 
    width: 150px;
    height: 40px;
`

function TransparentButton(props) {
    return (
        <Button onClick={props.onClick}>
            {props.children}
        </Button>
    )
}

export { TransparentButton }