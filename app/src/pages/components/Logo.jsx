import styled from 'styled-components';

const LogoText = styled.p`
    color: #f65261;
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