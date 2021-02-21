import React from 'react';
import styled from 'styled-components';

const LogoText = styled.p`
    color: #f65261;
`

function Logo() {
    return (
        <LogoText>
            <strong>netflix</strong>roulette
        </LogoText>
    )
}

export { Logo }