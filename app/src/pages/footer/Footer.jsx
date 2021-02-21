import React from 'react';
import styled from 'styled-components';
import { Logo } from '../components/Logo';

const Container = styled.div`
    background-color: #424242;
    text-align: center;
    padding: 20px 0px;
`

function Footer() {
    return (
        <Container>
            <Logo />
        </Container>
    )
}

export { Footer }