import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const ColoredButton = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    background: ${VARIABLES.red}; 
    width: 150px;
    height: 40px;
`

export { ColoredButton }