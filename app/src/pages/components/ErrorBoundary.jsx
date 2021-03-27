import styled from 'styled-components';
import React from 'react';

const ErrorText = styled.p`
    margin-top: 100px;
    font-size: 40px;
    text-align: center;
`

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {        
        console.log(error, errorInfo);
    }

    render() {
        return (
            <>
            {
                this.state.hasError
                    ? <ErrorText>Ooops! Something went wrong, we are working on it!</ErrorText> 
                    : this.props.children
            }
            </>
        )
    }
}

export { ErrorBoundary }