import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    color: white;
    font-size: 35px;
    flex-basis: 100%;
    margin-bottom: 40px;
`

function SearchText(){
    return (
        <Text>
            FIND YOUR MOVIE
        </Text>
    );
}

export { SearchText }