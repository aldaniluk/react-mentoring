import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const LogoText = styled.p`
    color: ${VARIABLES.red};
`

const BoldText = styled.span`
    font-weight: bold;
`

function Logo() {
    return (
        <LogoText>
            <BoldText>netflix</BoldText>roulette
        </LogoText>
    )
}

export { Logo }