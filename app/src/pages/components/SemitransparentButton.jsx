import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const SemitransparentButton = styled.button`
    border: none;
    border-radius: 5px;
    color: ${VARIABLES.red};
    background: rgba(255, 255, 255, 0.2);     
    width: 150px;
    height: 40px;
`

export { SemitransparentButton }