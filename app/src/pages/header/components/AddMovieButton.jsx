import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 4px;
    color: #f65261;
    background: rgba(255, 255, 255, 0.2);     
    padding: 10px 15px;
`

function AddMovieButton(){
    return (
        <Button>
            <strong>+ ADD MOVIE</strong>
        </Button>
    );
}

export { AddMovieButton }