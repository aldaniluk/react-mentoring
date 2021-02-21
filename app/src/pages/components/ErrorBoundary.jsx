import React from 'react';
import styled from 'styled-components';

const ErrorText = styled.p`
    margin-top: 100px;
    font-size: 40px;
    text-align: center;
`

//just for try, now it is not working
//'only class components can be error boundaries' from https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries
function ErrorBoundary(props) {
    let hasErrors = false; 

    return (
        <>
        {
            hasErrors
                ? <ErrorText>Ooops! Something went wrong, we are working on it!</ErrorText> 
                : props.children
        }
        </>
    )
}

export { ErrorBoundary }