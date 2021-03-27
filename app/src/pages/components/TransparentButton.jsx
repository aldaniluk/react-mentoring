import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const TransparentButton = styled.button`
    border: 2px solid ${VARIABLES.red};
    border-radius: 5px;
    color: ${VARIABLES.red};
    background: none; 
    width: 150px;
    height: 40px;
`

export { TransparentButton }