import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const Button = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    background: ${VARIABLES.red}; 
    width: 150px;
    height: 40px;
`

function ColoredButton(props) {
    return (
        <Button onClick={props.onClick}>
            {props.children}
        </Button>
    )
}

export { ColoredButton }